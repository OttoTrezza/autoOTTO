var Usuario = require('../models/usuario');

class UsuariosLista {
    constructor() {
            this.lista = [];

        }
        // Agregar un usuario
    agregar(usuarioLis) {
        this.lista.push(usuarioLis);
        console.log(this.lista);
        return usuarioLis;
    }
    actualizarSalas(id, salas) {
        let usuarioLis = this.lista.find(usuarioLis => usuarioLis.id === id);
        for (usuarioLis of this.lista) {
            if (usuarioLis.id === id) {
                usuarioLis.salas = salas;
                console.log('actusu', usuarioLis);
                break;
            }
        }
        console.log('===== Actualizando salas ====');
        // console.log(usuarioLis.salas);
    }
    obtenerSalsas() {
            //                    let falas = [];
            Usuario.find({}, 'sala')
                .exec((err, salas) => {
                    if (err) {
                        console.log('Error', err);
                    } else {
                        // console.log('salasbusqueda', salas);

                        salas.push(sala);
                        // falas.push(sala);
                    }
                    if (salas) console.log('salas, de obtener salas', salas);
                    // this.usuariosConectados.actualizarSalas(cliente.id, falas);
                    //    usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
                    //   cliente.emit('usuarios-activos', usuarios);
                    //   cliente.emit('salas-activas', falas);
                    return falas;
                });
        }
        // Obtener lista de usuarios
    getLista() {
            //console.log('getLista');
            return this.lista.filter(usuarioLis => usuarioLis.nombre !== 'sin-nombre');
        }
        // Obtener un usuario
    getUsuario(nombre) {
        return this.lista.find(usuarioLis => usuarioLis.nombre === nombre);
    }
    getCliente(id) {
            return this.lista.find(usuarioLis => usuarioLis.id === id);
        }
        // Obtener usuario en una sala en particular
    getUsuariosEnSala(sala) {
        return this.lista.filter(usuarioLis => usuarioLis.sala === sala);

    }
    getSalas() {
        // console.log('this.salas-getSalas-usulist', this.salas);
        return '0conchas';
    }
    borrarSalas() {
            // this.salas = {};
            return 'conchas';
        }
        // Borrar Usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuarioLis => usuarioLis.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;