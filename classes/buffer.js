// **YO SIGO SIENDO SERVER**//

const fs = require('fs');


class Valor {
    constructor(dispositivo, beta1, gamma1, alpha1) { // , accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityy, accelerationincludinggravityz, rotationratebeta, rotationrategamma, rotationratealpha, canal, cond1

        this.dispositivo = dispositivo;
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
        this.dispositivos = [];
        this.valor = {};
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = 2;

        let data = require('./data/data.json');
        console.log('data', data);

        // if (data.hoy === this.hoy) {
        this.ultimo = data.ultimo;
        this.dispositivos = data.dispositivos;
        this.valores = data.valores;
        this.valor = data.valores[0];
        this.ultimos4 = data.ultimos4;
        this.ultimos14 = data.ultimos14;
        this.ultimos24 = data.ultimos24;
        this.codigoEvento = data.codigoEvento;
        // } else {
        //     this.reiniciarConteo();
        // }
    }



    siguiente(dispositivo, beta1, gamma1, alpha1) { // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
        this.ultimo = this.ultimo + 1;
        let valor = new Valor(dispositivo, beta1, gamma1, alpha1); // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
        //  this.dispositivos.push(valor.dispositivo);
        //  let dispos = this.getDispositivos();
        this.valores.push(valor);


        this.valor = { dispositivo, beta1, gamma1, alpha1 };
        this.grabarArchivo();
        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }

        let beta1Valor = this.getUltimoValor(dispositivo).beta1; // EXTRAIGO EL NUMERO PARA ROMPER LA RELACION QUE TIENE JSCRIPT CON QUE TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
        let gamma1Valor = this.getUltimoValor(dispositivo).gamma1;
        let alpha1Valor = this.getUltimoValor(dispositivo).alpha1;
        // let accelerationxValor = this.getUltimoValor.accelerationx;
        // let accelerationyValor = this.getUltimoValor.accelerationy;
        // let accelerationzValor = this.getUltimoValor.accelerationz;
        // let accelerationincludinggravityxValor = this.getUltimoValor.accelerationincludinggravityx;
        // let accelerationincludinggravityyValor = this.getUltimoValor.accelerationincludinggravityy;
        // let accelerationincludinggravityzValor = this.getUltimoValor.accelerationincludinggravityz;
        // let rotationratebetaValor = this.getUltimoValor.rotationratebeta;
        // let rotationrategammaValor = this.getUltimoValor.rotationrategamma;
        // let rotationratealphaValor = this.getUltimoValor.rotationratealpha;
        let atenderValor = new Valor(dispositivo, beta1Valor, gamma1Valor, alpha1Valor);
        let valoreslis = this.valores.find(valoreslis => valoreslis.dispositivo === dispositivo);
        for (valoreslis of this.valores) {
            if (valoreslis.dispositivo === dispositivo) {
                this.ultimos4.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4
                this.ultimos14.unshift(atenderValor);
                this.ultimos24.unshift(atenderValor);
                if (this.ultimos4.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
                    this.ultimos4.splice(-1, 1);
                }
                if (this.ultimos14.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
                    this.ultimos14.splice(-1, 1);
                }
                if (this.ultimos24.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
                    this.ultimos24.splice(-1, 1);
                }
                // console.log('Ultimos 4');
                console.log(this.ultimos4);
                this.grabarArchivo();
                // return atenderValor;
                this.analisisUltimos24(this.ultimos24);
                break;
            }
        }
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

    getUltimoValor(dispositivo) {
        let valoreslis = this.valores.find(valoreslis => valoreslis.dispositivo === dispositivo);
        for (valoreslis of this.valores) {
            if (valoreslis.dispositivo === dispositivo) {
                return this.valor;
            }
        }
    }
    getDispositivos() {

        let valoreslis = this.valores.find(valoreslis => valoreslis.dispositivo !== '');
        let i;
        for (valoreslis of this.valores) {
            if (this.getDispositivos().contains(this.valor.dispositivo)) {
                i = i;
                return this.dispositivos;
            } else {
                this.dispositivos[i] = this.valor.dispositivo;
                i++;
                return this.dispositivos;
            }

        }
    }
    getThisDispositivo() {

        return this.dispositivo;
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
        this.ultimos4 = [];
        this.ultimos4a = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = 0;

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            valores: this.valores,
            ultimos4: this.ultimos4,
            ultimos4a: this.ultimos4a,
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