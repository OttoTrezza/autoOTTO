var usuarios_lista = require('../classes/usuarios-lista');
var Usuario = require('../models/usuario');
var { ValorControl } = require('../classes/buffer');

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
        //  console.log('wwww', cliente.id);
        // this.usuariosConectados.borrarSalas();
        //=====================================================================
        //Obtener todas las salas
        //=====================================================================
        falas = obtenerSalsas(cliente, payload.sala);

        // console.log('Mensaje recibido P.Nombre, P.Sala', payload.nombre, payload.sala);     
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


        // cliente.to(payload.sala).emit('usuarios-activos', usuarios);

        console.log('lassalas1', falas);
        cliente.emit('usuarios-activos', usuarios);
        // cliente.emit('salas-activas', "juegos");
        cliente.emit('salas', falas);
        // console.log('salas', lassalas);
        //console.log('Emitido', usuarios);

        const pay = {
            de: 'Administrador',
            cuerpo: 'Nuevo usuario'
        };

        cliente.to(payload.sala).emit('mensaje-nuevo', pay);
        // cliente.emit('mensaje-nuevo', pay);
        // return callback(usuarios);
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

        valorControl.siguiente(payload.cuerpo, payload.cuerpo1, payload.de);
        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            cuerpo1: payload.cuerpo1
        };
        cliente.to(payload.sala).emit('mensajesp-nuevo', msg);


        console.log(payload.de, 'ha enviado esto', payload.cuerpo, payload.cuerpo1);
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