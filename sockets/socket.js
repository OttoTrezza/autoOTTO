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
            img: payload.img
        };
        cliente.to(payload.sala).emit('mensaje-nuevo', msg);
        cliente.emit('mensaje-nuevo', msg);
        console.log(payload.de, 'ha enviado esto', payload.cuerpo);

        callback(msg);


    });
};
// Escuchar mensajes
exports.mensajeAutoOTTO = (cliente) => {
    cliente.on('mensaje-autoOTTO', (payload, callback) => {

        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img
        };
        cliente.to(payload.sala).emit('mensaje-nuevo-auto', msg);
        cliente.emit('mensaje-nuevo-auto', msg);

        console.log(payload.de, 'ha enviado esto', payload.cuerpo);

        callback(msg);

    });
};


// Escuchar mensajes
exports.ElSarmiento = (cliente) => {
    cliente.on('ElSarmiento', (payload, callback) => {

        valorControl.siguiente(payload.pos1, payload.de, payload.beta1, payload.gamma1, payload.alpha1); // , payload.accelerationx, payload.accelerationy, payload.accelerationz, payload.accelerationincludinggravityx, payload.accelerationincludinggravityy, payload.accelerationincludinggravityz, payload.rotationratebeta, payload.rotationrategamma, payload.rotationratealpha

        let va0 = valorControl.getUltimoValor();
        let dispoConec = valorControl.getDispositivosConectados();
        console.log('DISPOCONEC', dispoConec);
        const paya = {
            pos1: va0.pos1,
            de1: va0.dispo1,
            beta1: va0.beta1,
            gamma1: va0.gamma1,
            alpha1: va0.alpha1,
            sala: 'Juegos'
        };
        cliente.to('Juegos').emit('Dispo1', paya);
        cliente.emit('Dispo1', paya);

        console.log(payload.de, 'ha enviado esto', paya);
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
        callback(paya);
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