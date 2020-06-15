var usuarios_lista = require('../classes/usuarios-lista');
var Usuario = require('../models/usuario');
var { ValorControl } = require('../classes/buffer');
var socketIO = require('socket.io');
var io = require('socket.io');
exports.usuariosConectados = new usuarios_lista.UsuariosLista();

const valorControl = new ValorControl();

exports.conectarCliente = (cliente) => {
    // console.log('cliente', cliente);
    cliente.on('connect', () => {
        console.log('ENTRO ESP');
    });
};


exports.entrarChat = (cliente) => {
    cliente.on('entrarChat', (payload) => {
        //=====================================================================
        //Obtener todas las salas
        //=====================================================================
        falas = obtenerSalsas(cliente, payload.sala);
        usuarioLis = {
            nombre: payload.nombre,
            sala: 'Juegos',
            img: payload.img,
            id: cliente.id,
            salas: falas
        };

        if (!this.usuariosConectados.getUsuario(usuarioLis.nombre)) {
            this.usuariosConectados.agregar(usuarioLis);
        }
        cliente.join(usuarioLis.sala);
        usuarios = this.usuariosConectados.getUsuariosEnSala(usuarioLis.sala);

        console.log('lassalas1', falas);
        cliente.emit('usuarios-activos', usuarios);
        cliente.emit('salas', falas);

        const pay = {
            de: 'Administrador',
            cuerpo: 'Nuevo usuario'
        };

        cliente.to(payload.sala).emit('mensaje-nuevo', pay);
    });
};


exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado', cliente.id);
        usuario2 = this.usuariosConectados.getCliente(cliente.id);
        sal = 'Juegos';
        this.usuariosConectados.borrarUsuario(cliente.id);
        //  console.log(cliente.id);
        usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
        cliente.to('Juegos').emit('usuarios-activos', usuarios);
        // this.usuarios = this.usuariosConectados.getLista();
        // io.emit('usuarios-activos', this.usuariosConectados.getLista());

    });
};
// Escuchar mensajes de WebSocket
exports.WSmensaje = (cliente) => {
    cliente.on('WStype_TEXT', (payload, callback) => {
        if (payload[0] === '#') {
            rgb(cliente, payload);
        }

        io.to(cliente).emit('WStype_TEXT', payload);
    });
};


exports.frecuencia = (cliente) => {
    cliente.on('frecuencia', (payload, callback) => {
        msg = {
            de: payload.de,
            frec: payload.frec,
            sala: payload.sala
        };
        cliente.to(payload.sala).emit('frecuencia', msg);
        console.log('frecuencia', msg);

    });
};
exports.LongPulse = (cliente) => {
    cliente.on('LongPulse', (payload, callback) => {
        msg = {
            de: payload.de,
            LongP: payload.LongP,
            sala: payload.sala
        };
        cliente.to(payload.sala).emit('LongPulse', msg);
        console.log('LongPulse', msg);

    });
};
// Escuchar mensajes
exports.mensaje = (cliente) => {
    cliente.on('mensaje', (payload, callback) => {

        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img,
            // sala: payload.sala
        };
        cliente.to(payload.sala).emit('mensaje-nuevo', msg);
        cliente.emit('mensaje-nuevo', msg);

        console.log(payload.de, 'ha enviado esto', payload.cuerpo);
        // cliente.emit('mensaje-nuevo', pay);


        //  io.emit('mensaje-nuevo', payl);
        // console.log('payload', msg);
        // return callback(msg);
    });
};


// Escuchar mensajes
exports.mensajesp = (cliente) => {
    cliente.on('mensajesp', (payload, callback) => {
        msg = {
            de: payload.de,
            sala: payload.sala,
            cuerpo: payload.cuerpo1,
            cuerpo1: payload.cuerpo2
        };

        cliente.to(payload.sala).emit('mensajesp-nuevo', msg);


        console.log(payload.de, 'ha enviado esto', payload.cuerpo, payload.cuerpo1);
    });
};
// Escuchar mensajes
exports.ElSarmiento = (cliente) => {
    cliente.on('ElSarmiento', (payload, callback) => {

        valorControl.siguiente(payload.beta1, payload.gamma1, payload.alpha1); // , payload.accelerationx, payload.accelerationy, payload.accelerationz, payload.accelerationincludinggravityx, payload.accelerationincludinggravityy, payload.accelerationincludinggravityz, payload.rotationratebeta, payload.rotationrategamma, payload.rotationratealpha
<<<<<<< HEAD
        let Sarmiento = valorControl.getUltimoValor();
        msg = {
            de: 'test16',
            sala: Sarmiento.sala,
            beta1: Sarmiento.beta1,
            gamma1: Sarmiento.gamma1,
            alpha1: Sarmiento.alpha1,
            // accelerationx1: Sarmiento.accelerationx1,
            // accelerationy1: Sarmiento.accelerationy1,
            // accelerationz1: Sarmiento.accelerationz1,
            // accelerationincludinggravityx1: Sarmiento.accelerationincludinggravityx1,
            // accelerationincludinggravityy1: Sarmiento.accelerationincludinggravityy1,
            // accelerationincludinggravityz1: Sarmiento.accelerationincludinggravityz1,
            // rotationratebeta1: Sarmiento.rotationratebeta1,
            // rotationrategamma1: Sarmiento.rotationrategamma1,
            // rotationratealpha1: Sarmiento.rotationratealpha1,
        };
        cliente.to(payload.sala).emit('ElSarmiento-nuevo', msg);

=======
        // let Sarmiento = valorControl.getUltimoValor();
        msg = {
            de: payload.de,
            sala: payload.sala,
            beta1: payload.beta1,
            gamma1: payload.gamma1,
            alpha1: payload.alpha1
                // accelerationx1: Sarmiento.accelerationx1,
                // accelerationy1: Sarmiento.accelerationy1,
                // accelerationz1: Sarmiento.accelerationz1,
                // accelerationincludinggravityx1: Sarmiento.accelerationincludinggravityx1,
                // accelerationincludinggravityy1: Sarmiento.accelerationincludinggravityy1,
                // accelerationincludinggravityz1: Sarmiento.accelerationincludinggravityz1,
                // rotationratebeta1: Sarmiento.rotationratebeta1,
                // rotationrategamma1: Sarmiento.rotationrategamma1,
                // rotationratealpha1: Sarmiento.rotationratealpha1,
        };
        cliente.to('juegos').emit('ElSarmiento-nuevo', msg);
        cliente.emit('ElSarmiento-nuevo', msg);
>>>>>>> master

        console.log(payload.de, 'ha enviado esto', msg);
    });
};

// Escuchar dir
exports.dir = (cliente) => {
    cliente.on('dir', (payload, callback) => {
        msg = {
            de: payload.de,
            dir: payload.dir
        };
        cliente.to(payload.sala).emit('mensajedir-nuevo', msg);
        console.log(msg.de, 'ha enviado est direccion', msg.dir);
    });
};
// Escuchar sen
exports.sen = (cliente) => {
    cliente.on('sen', (payload, callback) => {
        msg = {
            de: payload.de,
            sen: payload.sen
        };
        cliente.to(payload.sala).emit('mensajesen-nuevo', msg);
        console.log(msg.de, 'ha enviado est sentido', msg.sen);
    });
};

// Mensaje Nuevo ( SIEMPRE RESPUESTA DEL SERVER!!!)

// exports.mensaje = (cliente, io) => {
//     cliente.on('mensaje-nuevo', (payload) => {

//         console.log('Mensaje recibido', payload);

//         io.to(this.cliente).emit('resp', payload);

//         //  io.emit('mensaje-nuevo', payl);
//         console.log('payload', payl);
//         //   return callback(payl);
//     });
// };


// Configurar usuario
exports.configurarUsuario = (cliente) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        console.log('configUsuar', payload.nombre, payload.sala);
        // this.usuariosConectados.actualizarSalas(cliente.id, );

        cliente.emit('usuarios-activos', usuarios);


        callback({
            ok: true,
            mensaje: `Usuario ${ payload.nombre } - Sala ${ payload.sala}, configurado`
        });
        console.log('configUsuar', payload.nombre, payload.sala);
    });
};

// Obtener Usuarios
exports.obtenerUsuarios = (cliente) => {
    cliente.on('obtener-usuarios', (pay, callback) => {
        usuarios = this.usuariosConectados.getUsuariosEnSala(pay);
        cliente.to(pay).emit('usuarios-activos', usuarios);
        cliente.emit('usuarios-activos', usuarios);
        console.log('Emitido', usuarios);
        callback = { entro: true };
    });
};

// Obtener Salas
exports.obtenerSalas = (cliente) => {
    cliente.on('obtener-salas', (callback) => {
        salas = obtenerSalsas();
        cliente.emit('salas-activas', salas);
        console.log('Emitido', salas);
        callback = { entro: true };
    });
};

// rgb servidor a esp
rgb = (cliente, payload) => {
    rgb = payload.cuerpo;
    cliente.to(cliente).emit('WStype_TEXT', rgb);
    console.log('Emitido a esp', rgb);
};

obtenerSalsas = (cliente, sal) => {

    let falas = [];
    Usuario.find({}, 'sala')
        .exec((err, salas) => {
            if (err) {
                console.log('Error', err);
            } else {
                // console.log('salasbusqueda', salas);
                var i;
                falas[salas.length] = [];
                for (i = 0; i < salas.length; i++) {
                    falas[i] = salas[i].sala;
                }
                if (falas) console.log('falas111', falas);
                this.usuariosConectados.actualizarSalas(cliente.id, falas);
                usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
                cliente.emit('usuarios-activos', usuarios);
                cliente.emit('salas-activas', falas);
                return falas;
            }

        });

};