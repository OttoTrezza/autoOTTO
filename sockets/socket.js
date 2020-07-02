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
                cuerpo: 'Auto conectado a la red',
                codEv: 0
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

        valorControl.siguiente(payload.de, payload.beta1, payload.gamma1, payload.alpha1); // , payload.accelerationx, payload.accelerationy, payload.accelerationz, payload.accelerationincludinggravityx, payload.accelerationincludinggravityy, payload.accelerationincludinggravityz, payload.rotationratebeta, payload.rotationrategamma, payload.rotationratealpha
        let Sarmiento = valorControl.getUltimoValor(payload.de);

        msg = {
            de: payload.de,
            sala: payload.sala,
            beta1: Sarmiento.beta1,
            gamma1: Sarmiento.gamma1,
            alpha1: Sarmiento.alpha1
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
        //     cuerpo: Sarmiento.beta1 + '*' + Sarmiento.gamma1 + '*' + Sarmiento.alpha1,
        //     img: ''
        // };
        // cliente.emit('mensaje-nuevo-auto', msg1);
        cliente.to('Juegos').emit('ElSarmiento-nuevo', msg);
        cliente.emit('ElSarmiento-nuevo', msg);
        let dispos = valorControl.getDispositivos();

        let va0 = valorControl.getUltimoValor(dispos[0]);
        const paya = {
            de: dispos[0].dispositivo,
            sala: 'Juegos',
            beta1: va0.beta1,
            gamma1: va0.gamma1,
            alpha1: va0.alpha1
        };
        cliente.to('Juegos').emit('Dispo1', paya);
        cliente.emit('Dispo1', paya);
        if (available) {
            let va1 = valorControl.getUltimoValor(dispos[1]);
            const paya1 = {
                de: dispos[1],
                sala: 'Juegos',
                beta1: va1.beta1,
                gamma1: va1.gamma1,
                alpha1: va1.alpha1
            };
            cliente.to('Juegos').emit('Dispo2', paya1);
            cliente.emit('Dispo2', paya1);
        }
        if (available) {
            let va2 = valorControl.getUltimoValor(dispos[2]);
            const paya2 = {
                de: dispos[2],
                sala: 'Juegos',
                beta1: va2.beta1,
                gamma1: va2.gamma1,
                alpha1: va2.alpha1
            };
            cliente.to('Juegos').emit('Dispo3', paya2);
            cliente.emit('Dispo3', paya2);
        }
        // cliente.emit('ElSarmiento1-nuevo', msg1);
        console.log(payload.de, 'ha enviado esto', msg);
        let codEv = valorControl.getCodigoEvento();

        if (codEv == 1) {
            const pay = {
                de: payload.de,
                cuerpo: 'Movimiento-1',
                img: ''
            };
            cliente.to(payload.sala).emit('mensaje-auto', pay);
            cliente.emit('mensaje-auto', pay);
            // cliente.emit('mensaje-auto', pay);
            console.log('adentroo enviado', codEv);
        }

        if (codEv == 2) {
            const pay = {
                de: payload.de,
                cuerpo: 'sin magicMoves',
                img: ''
            };
            cliente.to(payload.sala).emit('mensaje-auto', pay);
            cliente.emit('mensaje-auto', pay);
        }
        //  console.log(payload.de, 'ha enviado esto', msg1);
        callback(msg);
    });
};




// Configurar usuario
exports.configurarUsuario = (cliente) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        console.log('configUsuar', payload.nombre, payload.sala);
        // this.usuariosConectados.actualizarSalas(cliente.id, );

        cliente.to(payload.sala).emit('usuarios-activos', usuarios);


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