var usuarios_lista = require('../classes/usuarios-lista');
var Usuario = require('../models/usuario');
var { ValorControl } = require('../classes/buffer');

exports.usuariosConectados = new usuarios_lista.UsuariosLista();

const valorControl = new ValorControl();

exports.conectar = (cliente) => {
    // console.log('cliente', cliente);
    cliente.on('conectar', (payload) => {
        console.log('cliente conectado: id', payload.nombre);
    });
};

exports.desconectar = (cliente) => {
    cliente.on('desconectar', (payload) => {
        console.log('Cliente desconectado: id', cliente.id);
        let usuario2 = this.usuariosConectados.getCliente(payload.nombre);
        const pay = {
            de: usuario2.nombre,
            cuerpo: 'Desconectado'
        };
        cliente.to('Juegos').emit('mensaje-nuevo-auto', pay);
        sal = 'Juegos';
        this.usuariosConectados.borrarUsuario(cliente.id);
        console.log('Cliente desconectado', cliente.id);
        usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
        cliente.to(cliente.sala).emit('usuarios-activos', usuarios);
        // valorControl.reiniciarConteo();
        valorControl.sacarDlista(usuario2.nombre);
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
        // valorControl.reiniciarConteo();
    });
};


// Escuchar mensajes(Chat de mensajes)
exports.mensaje = (cliente) => {
    cliente.on('mensaje', (payload, callback) => {

        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img
        };
        cliente.to(payload.sala).emit('mensaje-nuevo', msg);
        cliente.emit('mensaje-nuevo', msg);
        console.log(payload.de, 'ha enviado esto', payload.cuerpo);

        callback(msg);


    });
};
// Escuchar mensajes(Chat de auto)
exports.mensajeAutoOTTO = (cliente) => {
    cliente.on('mensaje-autoOTTO', (payload, callback) => {

        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img
        };
        cliente.to(payload.sala).emit('mensaje-nuevo-auto', msg);
        cliente.emit('mensaje-nuevo-auto', msg);
        if (payload.cuerpo === 'reiniciarConteo') {
            valorControl.reiniciarConteo();
        }
        if (payload.cuerpo === 'salirDsala') {
            valorControl.sacarDlista(payload.de);
        }
        console.log(payload.de, 'ha enviado esto', payload.cuerpo);

        callback(msg);

    });
};


// Escuchar mensajes(eventos deviceMotionOrientation)
exports.ElSarmiento = (cliente) => {
    cliente.on('ElSarmiento', (payload, callback) => {
        // valorControl.reiniciarConteo();
        valorControl.siguiente(payload.pos1, payload.de, payload.beta1, payload.gamma1, payload.alpha1, payload.accelerationx1, payload.accelerationy1, payload.accelerationz1, payload.accelerationincludinggravityx1, payload.accelerationincludinggravityy1, payload.accelerationincludinggravityz1, payload.rotationratebeta1, payload.rotationrategamma1, payload.rotationratealpha1);

        let va0 = valorControl.getUltimoValor();
        let dispoConec = valorControl.getDispositivosConectados();
        //  let dispoConecult4 = valorControl.getDispositivosConectadosporPos(0);
        // let dispoConecult41 = valorControl.getDispositivosConectadosporPos(1);
        console.log('DISPOCONEC', dispoConec);
        // console.log('dispoConecult4 0', dispoConecult4);
        // console.log('dispoConecult4 1', dispoConecult41);
        const paya = {
            pos1: va0.pos1,
            de: va0.dispo1,
            beta1: va0.beta1,
            gamma1: va0.gamma1,
            alpha1: va0.alpha1,
            accelerationx1: va0.accelerationx1,
            accelerationy1: va0.accelerationy1,
            accelerationz1: va0.accelerationz1,
            accelerationincludinggravityx1: va0.accelerationincludinggravityx1,
            accelerationincludinggravityy1: va0.accelerationincludinggravityy1,
            accelerationincludinggravityz1: va0.accelerationincludinggravityz1,
            rotationratebeta1: va0.rotationratebeta1,
            rotationrategamma1: va0.rotationrategamma1,
            rotationratealpha1: va0.rotationratealpha1,
            sala: 'Juegos'
        };
        cliente.to('Juegos').emit('Dispo1', paya);
        cliente.emit('Dispo1', paya);

        // console.log(payload.de, 'ha enviado esto', paya);
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
            //   console.log('adentroo enviado', codEv);
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
        callback(paya);
    });
};


// Configurar usuario(metodo general)
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

// Obtener Usuarios(metodo general)
exports.obtenerUsuarios = (cliente) => {
    cliente.on('obtener-usuarios', (pay, callback) => {
        usuarios = this.usuariosConectados.getUsuariosEnSala(pay);
        cliente.to(pay).emit('usuarios-activos', usuarios);
        cliente.emit('usuarios-activos', usuarios);
        console.log('Emitido', usuarios);
        callback = { entro: true };
    });
};

// Obtener Salas(metodo general)
exports.obtenerSalas = (cliente) => {
    cliente.on('obtener-salas', (callback) => {
        salas = obtenerSalsas(cliente);
        cliente.emit('salas-activas', salas);
        console.log('Emitido', salas);
        callback = { entro: true };

    });
};

obtenerSalsas = (cliente) => {

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