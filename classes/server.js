var express = require('express');
require('../config/config');
var socketIO = require('socket.io');
var http = require('http');
const socket = require('../sockets/socket');
// const path = require('path');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer); // sacar segundo parametro..Options
        this.escucharSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }

    escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente => {

            console.log('Cliente conectado', cliente.id);
            // console.log('Cliente conectado', cliente);
            // Conectar usuario
            socket.conectarCliente(cliente);
            // Entrar c*hat
            socket.entrarChat(cliente);
            // Entrar chat
            // socket.entrarChats(cliente);
            // Configurar usuario
            socket.configurarUsuario(cliente);
            // Obtener usuarios activos
            socket.obtenerUsuarios(cliente);
            // Obtener salas activas
            // socket.obtenerSalas(cliente);
            // Mensajes
            socket.mensaje(cliente);
            socket.frecuencia(cliente);
            socket.LongPulse(cliente);
            // Mensajes
            socket.mensajesp(cliente);
            // Desconectar
            socket.desconectar(cliente);
            //   cliente.on('disconect', () => {
            //        console.log('Cliente Desconectado');
            //    });
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
        console.log('server.js start', this.port);
        //  this.publicFolder();
    }
}
exports.default = Server;