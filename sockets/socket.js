var usuarios_lista = require('../classes/usuarios-lista');
var Usuario = require('../models/usuario');
var { ValorControl } = require('../classes/buffer');
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
        sal = 'Juegos';
        if (!this.usuariosConectados.getUsuario(usuarioLis.nombre)) {
            this.usuariosConectados.agregar(usuarioLis);
        }
        cliente.join(usuarioLis.sala);
        usuarios = this.usuariosConectados.getUsuariosEnSala(usuarioLis.sala);

        cliente.emit('usuarios-activos', usuarios);
        cliente.emit('salas', falas);
        if (payload.nombre === 'autoOTTO') {
            const pay = {
                de: payload.nombre,
                cuerpo: 'Auto conectado a la red'
            };

            cliente.to(payload.sala).emit('mensaje-auto', pay);
        }

    });
};


exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado', cliente.id);
        let usuario2 = this.usuariosConectados.getCliente(cliente.id);
        // if (usuario2.nombre === 'autoOTTO') {
        const pay = {
            de: 'autoOTTO',
            cuerpo: usuario2
        };
        cliente.to(cliente.sala).emit('mensaje-auto', pay);
        // } else {
        //     const pay = {
        //         de: 'Administrador',
        //         cuerpo: 'Cliente Desconectado'
        //     };
        //     cliente.to(cliente.sala).emit('mensaje-nuevo', pay);
        // }
        sal = 'Juegos';
        this.usuariosConectados.borrarUsuario(cliente.id);
        //  console.log(cliente.id);
        usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
        cliente.to(cliente.sala).emit('usuarios-activos', usuarios);


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
        callback(msg);

        //  io.emit('mensaje-nuevo', payl);
        // console.log('payload', msg);
        // return callback(msg);
    });
};
// Escuchar mensajes
exports.mensajeAutoOTTO = (cliente) => {
    cliente.on('mensaje-autoOTTO', (payload, callback) => {

        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img,
            // sala: payload.sala
        };
        cliente.to(payload.sala).emit('mensaje-nuevo-auto', msg);
        cliente.emit('mensaje-nuevo-auto', msg);

        console.log(payload.de, 'ha enviado esto', payload.cuerpo);
        // cliente.emit('mensaje-nuevo', pay);
        callback(msg);

        //  io.emit('mensaje-nuevo', payl);
        // console.log('payload', msg);
        // return callback(msg);
    });
};


// Escuchar mensajes
exports.ElSarmiento = (cliente) => {
    cliente.on('ElSarmiento', (payload, callback) => {

        valorControl.siguiente(payload.beta1, payload.gamma1, payload.alpha1); // , payload.accelerationx, payload.accelerationy, payload.accelerationz, payload.accelerationincludinggravityx, payload.accelerationincludinggravityy, payload.accelerationincludinggravityz, payload.rotationratebeta, payload.rotationrategamma, payload.rotationratealpha
        let Sarmiento = valorControl.getUltimoValor();

        msg = {
            de: payload.de,
            sala: payload.sala,
            beta1: payload.beta1,
            gamma1: Sarmiento,
            alpha1: Sarmiento.
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
        // msg1 = {
        //     de: payload.de,
        //     sala: payload.sala,
        //     beta1: Sarmiento.beta1,
        //     gamma1: Sarmiento.gamma1,
        //     alpha1: Sarmiento.alpha1
        // };
        // cliente.emit('ElSarmiento-nuevo', msg1);
        cliente.emit('ElSarmiento-nuevo', msg);
        // cliente.emit('ElSarmiento1-nuevo', msg1);
        console.log(payload.de, 'ha enviado esto', msg);
        //  console.log(payload.de, 'ha enviado esto', msg1);
        callback(msg);
    });
};




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
exports.obtenerSalas = (cliente, sal) => {
    cliente.on('obtener-salas', (callback) => {
        salas = obtenerSalsas(sal);
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

// // Escuchar mensajes de WebSocket
// exports.WSmensaje = (cliente) => {
//     cliente.on('WStype_TEXT', (payload, callback) => {
//         if (payload[0] === '#') {
//             rgb(cliente, payload);
//         }

//         io.to(cliente).emit('WStype_TEXT', payload);
//         callback(msg);
//     });
// };


// exports.frecuencia = (cliente) => {
//     cliente.on('frecuencia', (payload, callback) => {
//         msg = {
//             de: payload.de,
//             frec: payload.frec,
//             sala: payload.sala
//         };
//         cliente.to(payload.sala).emit('frecuencia', msg);
//         console.log('frecuencia', msg);
//         callback(msg);
//     });
// };
// exports.LongPulse = (cliente) => {
//     cliente.on('LongPulse', (payload, callback) => {
//         msg = {
//             de: payload.de,
//             LongP: payload.LongP,
//             sala: payload.sala
//         };
//         cliente.to(payload.sala).emit('LongPulse', msg);
//         console.log('LongPulse', msg);
//         callback(msg);
//     });
// };
// // Escuchar mensajes
// exports.mensajesp = (cliente) => {
//     cliente.on('mensajesp', (payload, callback) => {
//         msg = {
//             de: payload.de,
//             sala: payload.sala,
//             cuerpo: payload.cuerpo1,
//             cuerpo1: payload.cuerpo2
//         };

//         cliente.to(payload.sala).emit('mensajesp-nuevo', msg);


//         console.log(payload.de, 'ha enviado esto', payload.cuerpo, payload.cuerpo1);
//         callback(msg);
//     });
// };
// // Escuchar dir
// exports.dir = (cliente) => {
//     cliente.on('dir', (payload, callback) => {
//         msg = {
//             de: payload.de,
//             dir: payload.dir
//         };
//         cliente.to(payload.sala).emit('mensajedir-nuevo', msg);
//         console.log(msg.de, 'ha enviado est direccion', msg.dir);
//         callback(msg);
//     });
// };
// // Escuchar sen
// exports.sen = (cliente) => {
//     cliente.on('sen', (payload, callback) => {
//         msg = {
//             de: payload.de,
//             sen: payload.sen
//         };
//         cliente.to(payload.sala).emit('mensajesen-nuevo', msg);
//         console.log(msg.de, 'ha enviado est sentido', msg.sen);
//         callback(msg);
//     });
// };

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