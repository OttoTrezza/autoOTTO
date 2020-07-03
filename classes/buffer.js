// **YO SIGO SIENDO SERVER**//

const fs = require('fs');


class Valor {
    constructor(pos1, dispo1, beta1, gamma1, alpha1) { // , accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityy, accelerationincludinggravityz, rotationratebeta, rotationrategamma, rotationratealpha, canal, cond1
        this.pos1 = pos1;
        this.dispo1 = dispo1;
        this.beta1 = beta1;
        this.gamma1 = gamma1;
        this.alpha1 = alpha1;

        // this.accelerationx = accelerationx;
        // this.accelerationy = accelerationy;
        // this.accelerationz = accelerationz;
        // this.accelerationincludinggravityx = accelerationincludinggravityx;
        // this.accelerationincludinggravityy = accelerationincludinggravityy;
        // this.accelerationincludinggravityy = accelerationincludinggravityz;
        // this.rotationratebeta = rotationratebeta;
        // this.rotationrategamma = rotationrategamma;
        // this.rotationratealpha = rotationratealpha;
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
        this.ultimos4 = {
            1: [],
            2: [],
            3: [],
            4: []
        };
        this.ultimos14 = {
            1: [],
            2: [],
            3: [],
            4: []
        };
        this.ultimos24 = {
            1: [],
            2: [],
            3: [],
            4: []
        };
        this.codigoEvento = 2;

        let data = require('./data/data.json');
        console.log('data', data);

        // if (data.hoy === this.hoy) {
        this.ultimo = data.ultimo;
        this.valores = data.valores;
        this.valor = data.valor;
        this.posiciones = data.posiciones;
        this.ultimos4 = data.ultimos4;
        this.ultimos14 = data.ultimos14;
        this.ultimos24 = data.ultimos24;
        this.codigoEvento = data.codigoEvento;
        // } else {
        //     this.reiniciarConteo();
        // }
    }


    // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
    siguiente(pos1, dispo1, beta1, gamma1, alpha1) {
        this.ultimo = this.ultimo + 1;

        if (pos1 === 0) {
            this.posiciones = {
                1: dispo1,
                2: 'sin dispositivo',
                3: 'sin dispositivo',
                4: 'sin dispositivo'
            };
            pos1 = 0;
            //  console.log('this.posiciones', this.posiciones);
            this.grabarArchivo();
        } else if (!this.posiciones.includes(dispo1)) {
            pos1 = pos1 + 1;
            this.posiciones[pos1] = dispo1; // this.posiciones[1] = dispo;
            console.log('this.posiciones1, pos1', this.posiciones, pos1);
            this.grabarArchivo();
        }

        let valor = new Valor(pos1, dispo1, beta1, gamma1, alpha1); // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
        this.valores.push(valor);
        this.valor = { pos1, dispo1, beta1, gamma1, alpha1 };

        this.grabarArchivo();
        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }
        let pos1Valor = this.getUltimoValor().pos1;
        let dispo1Valor = this.getUltimoValor().dispo1;
        let beta1Valor = this.getUltimoValor().beta1;
        let gamma1Valor = this.getUltimoValor().gamma1;
        let alpha1Valor = this.getUltimoValor().alpha1;
        // let accelerationxValor = this.getUltimoValor.accelerationx;
        // let accelerationyValor = this.getUltimoValor.accelerationy;
        // let accelerationzValor = this.getUltimoValor.accelerationz;
        // let accelerationincludinggravityxValor = this.getUltimoValor.accelerationincludinggravityx;
        // let accelerationincludinggravityyValor = this.getUltimoValor.accelerationincludinggravityy;
        // let accelerationincludinggravityzValor = this.getUltimoValor.accelerationincludinggravityz;
        // let rotationratebetaValor = this.getUltimoValor.rotationratebeta;
        // let rotationrategammaValor = this.getUltimoValor.rotationrategamma;
        // let rotationratealphaValor = this.getUltimoValor.rotationratealpha;


        this.valores.shift(); // ELIMINO LA PRIMERA POSICION DEL ARREGLO

        let atenderValor = new Valor(pos1Valor, dispo1Valor, beta1Valor, gamma1Valor, alpha1Valor); // accelerationxValor, accelerationyValor, accelerationzValor, accelerationincludinggravityxValor, accelerationincludinggravityyValor, accelerationincludinggravityzValor, rotationratebetaValor, rotationrategammaValor, rotationratealphaValor, canal // DECLARO EL TICKET QUE VOYT A ATENDER(VIENE CON NºTICKET Y ESCRITORIO)
        //  let analisisValor = { beta1Valor, gamma1Valor, alpha1Valor }; // console.log('atenderValor', atenderValor);

        this.ultimos4[pos1Valor].unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4
        if (this.ultimos4.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4.splice(-1, 1);
        }
        this.ultimos14[pos1Valor].unshift(atenderValor);
        if (this.ultimos14.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
            this.ultimos14.splice(-1, 1);
        }
        this.ultimos24[pos1Valor].unshift(atenderValor);
        if (this.ultimos24.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
            this.ultimos24.splice(-1, 1);
        }

        // console.log('Ultimos 4');
        console.log(this.ultimos4);
        this.grabarArchivo();
        // return atenderValor;
        this.analisisUltimos24(this.ultimos24[pos1Valor]);
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
        //  let vala = parseInt(valuer);
        if (betasa0 > betasa1) {
            console.log('es mayor');
            this.codigoEvento = 1;
            return this.codigoEvento;
        }
        // if (ultimos4[0] > ultimos4[4]) {
        //     console.log('es mayor aaaaaaaaaaaaa');
        //     this.codigoEvento = 1;
        //     return;
        // }
        this.codigoEvento = 2;
        return this.codigoEvento;

    }
    getDispositivosConectados() {
        return this.valores;
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