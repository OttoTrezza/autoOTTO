var express = require('express');
require('../config/config');
var socketIO = require('socket.io');
var http = require('http');
const socket = require('../sockets/socket');
// const path = require('path');
var Usuario = require('../models/usuario');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.salas = this.obtenerSalas();
        this.escucharSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }

    escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente => {

            console.log('Cliente conectado', cliente.id);
            socket.conectar(cliente);
            socket.desconectar(cliente);
            socket.entrarChat(cliente, this.salas);
            socket.mensaje(cliente);
            socket.mensajeAutoOTTO(cliente);
            socket.ElSarmiento(cliente);
            socket.configurarUsuario(cliente);
            socket.obtenerUsuarios(cliente);
            socket.obtenerSalas(cliente, this.salas);
        });
    }

    obtenerSalas() {
        Usuario.find({}, 'sala')
            .exec((err, usuarios) => {
                if (err) {
                    console.log('Error', err);
                } else {
                    // console.log('salasbusqueda', salas);
                    let i;
                    let salas = [];
                    for (i = 0; i < usuarios.length; i++) {


                        salas = salas + ', ' + usuarios[i].sala + ', ';
                        i++;
                    }
                    // this.salas = salas;
                    this.usuariosConectados.actualizarSalas(salas);
                    if (salas) console.log('salas, de obtener salas', salas);
                    // this.usuariosConectados.actualizarSalas(cliente.id, falas);
                    //    usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
                    //   cliente.emit('usuarios-activos', usuarios);
                    //   cliente.emit('salas-activas', falas);
                    return salas;
                }
                return salas;
            });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
        console.log('server.js start', this.port);
    }
}
exports.default = Server;