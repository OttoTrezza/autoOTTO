// **YO SIGO SIENDO SERVER**//

const fs = require('fs');


class Valor {
    constructor(pos1, dispo1, beta1, gamma1, alpha1, accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1) {
        this.pos1 = pos1;
        this.dispo1 = dispo1;
        this.beta1 = beta1;
        this.gamma1 = gamma1;
        this.alpha1 = alpha1;
        this.accelerationx1 = accelerationx1;
        this.accelerationy1 = accelerationy1;
        this.accelerationz1 = accelerationz1;
        this.accelerationincludinggravityx1 = accelerationincludinggravityx1;
        this.accelerationincludinggravityy1 = accelerationincludinggravityy1;
        this.accelerationincludinggravityy1 = accelerationincludinggravityz1;
        this.rotationratebet1a = rotationratebeta1;
        this.rotationrategamma1 = rotationrategamma1;
        this.rotationratealpha1 = rotationratealpha1;
        // this.canal = canal;
        // this.cond1 = cond1;
    }
}

class ValorControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDay();
        this.valores = [];
        this.valor = {};
        this.posiciones = [];
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = 2;

        let data = require('./data/data.json');
        console.log('data', data);

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.valores = data.valores;
            this.valor = data.valor;
            this.posiciones = data.posiciones;
            this.ultimos4 = data.ultimos4;
            this.ultimos14 = data.ultimos14;
            this.ultimos24 = data.ultimos24;
            this.codigoEvento = data.codigoEvento;
            this.posiciones = {
                1: 'sin dispositivo',
                2: 'sin dispositivo',
                3: 'sin dispositivo',
                4: 'sin dispositivo'
            };
        } else {
            this.reiniciarConteo();
        }
    }
    siguiente(pos1, dispo1, beta1, gamma1, alpha1, accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1) {
        this.ultimo = this.ultimo + 1;
        let posicione = this.getDispositivosConectados();

        if (posicione[0] === 'sin dispositivo') {
            this.posiciones[pos1] = dispo1;
            pos1 = 0;
            this.grabarArchivo();
        } else if (posicione[pos1] === 'sin dispositivo') {
            this.posiciones[pos1] = dispo1;
            this.grabarArchivo();
        } else this.posiciones[pos1] = dispo1;
        this.grabarArchivo();
        let valor = new Valor(pos1, dispo1, beta1, gamma1, alpha1, accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1);
        this.valores.push(valor);
        this.valor = { pos1, dispo1, beta1, gamma1, alpha1, accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1 };

        this.grabarArchivo();
        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }
        let pos1Valor = this.getUltimoValor().pos1;
        let dispo1Valor = this.getUltimoValor().dispo1;
        let beta1Valor = this.getUltimoValor().beta1;
        let gamma1Valor = this.getUltimoValor().gamma1;
        let alpha1Valor = this.getUltimoValor().alpha1;
        let accelerationx1Valor = this.getUltimoValor().accelerationx1;
        let accelerationy1Valor = this.getUltimoValor().accelerationy1;
        let accelerationz1Valor = this.getUltimoValor().accelerationz1;
        let accelerationincludinggravityx1Valor = this.getUltimoValor().accelerationincludinggravityx1;
        let accelerationincludinggravityy1Valor = this.getUltimoValor().accelerationincludinggravityy1;
        let accelerationincludinggravityz1Valor = this.getUltimoValor().accelerationincludinggravityz1;
        let rotationratebeta1Valor = this.getUltimoValor().rotationratebeta1;
        let rotationrategamma1Valor = this.getUltimoValor().rotationrategamma1;
        let rotationratealpha1Valor = this.getUltimoValor().rotationratealpha1;


        this.valores.shift(); // ELIMINO LA PRIMERA POSICION DEL ARREGLO

        let atenderValor = new Valor(pos1Valor, dispo1Valor, beta1Valor, gamma1Valor, alpha1Valor, accelerationx1Valor, accelerationy1Valor, accelerationz1Valor, accelerationincludinggravityx1Valor, accelerationincludinggravityy1Valor, accelerationincludinggravityz1Valor, rotationratebeta1Valor, rotationrategamma1Valor, rotationratealpha1Valor);
        //  let analisisValor = { beta1Valor, gamma1Valor, alpha1Valor }; // console.log('atenderValor', atenderValor);

        this.ultimos4.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4
        if (this.ultimos4.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4.splice(-1, 1);
        }
        this.ultimos14.unshift(atenderValor);
        if (this.ultimos14.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
            this.ultimos14.splice(-1, 1);
        }
        this.ultimos24.unshift(atenderValor);
        if (this.ultimos24.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
            this.ultimos24.splice(-1, 1);
        }
        this.grabarArchivo();
        this.analisisUltimos24(this.ultimos24);
        let as = this.getUltimos4Dispo(pos1Valor);

        console.log('todo', as);
    }
    analisisUltimos24(ultimos24) {
        if (ultimos24[3] == undefined) {
            ultimos24[3] = '0';
            this.codigoEvento = 0;
            return this.codigoEvento;
        }
        let betasaaa0 = ultimos24[0].beta1;
        let betasaaa1 = ultimos24[3].beta1;
        let betasa0 = parseInt(betasaaa0);
        let betasa1 = parseInt(betasaaa1);
        if (betasa0 > betasa1) {
            console.log('es mayor');
            this.codigoEvento = 1;
            return this.codigoEvento;
        }
        this.codigoEvento = 2;
        return this.codigoEvento;
    }
    getDispositivosConectados() {
        return this.posiciones;
    }

    getUltimoValor() {

        return this.valor;
    }
    getCodigoEvento() {

        return this.codigoEvento;
    }

    getUltimos4() {

        return this.ultimos4;
    }
    getUltimos4Dispo(pos) {
        return this.ultimos4.filter(valor => valor.pos1 === 0);
    }
    getUltimos14() {

        return this.ultimos14;
    }
    getUltimos24() {

        return this.ultimos14;
    }

    reiniciarConteo() {

        this.ultimo = 0;
        this.valores = [];
        this.posiciones = [];
        this.ultimos4 = {};
        this.ultimos14 = {};
        this.ultimos24 = {};
        this.codigoEvento = 0;

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            valores: this.valores,
            posiciones: this.posiciones,
            ultimos4: this.ultimos4,
            ultimos14: this.ultimos14,
            ultimos24: this.ultimos24,
            codigoEvento: this.codigoEvento
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./classes/data/data.json', jsonDataString);
    }


}
module.exports = {
    ValorControl
};