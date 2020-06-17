// **YO SIGO SIENDO SERVER**//

const fs = require('fs');


class Valor {
    constructor(beta1, gamma1, alpha1, canal, cond1) { // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityy, accelerationincludinggravityz, rotationratebeta, rotationrategamma, rotationratealpha,

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
        this.canal = canal;
        this.cond1 = cond1;
    }
}

class ValorControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDay();
        this.valores = [];
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];

        let data = require('./data/data.json');
        console.log(data);

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.valores = data.valores;
            this.ultimos4 = data.ultimos4;
            this.ultimos14 = data.ultimos14;
            this.ultimos24 = data.ultimos24;
        } else {
            this.reiniciarConteo();
        }
    }



    siguiente(beta1, gamma1, alpha1, canal) { //  accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha
        this.ultimo = this.ultimo + 1;

        let valor = new Valor(this.ultimo, beta1, gamma1, alpha1, canal); //  accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
        this.valores.push(valor);

        this.grabarArchivo();
        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }
        let beta1Valor = this.getUltimoValor.beta1; // EXTRAIGO EL NUMERO PARA ROMPER LA RELACION QUE TIENE JSCRIPT CON QUE TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
        let gamma1Valor = this.getUltimoValor.gamma1;
        let alpha1Valor = this.getUltimoValor.alpha1;
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
        let atenderValor = new Valor(beta1Valor, gamma1Valor, alpha1Valor, canal); //  accelerationxValor, accelerationyValor, accelerationzValor, accelerationincludinggravityxValor, accelerationincludinggravityyValor, accelerationincludinggravityzValor, rotationratebetaValor, rotationrategammaValor, rotationratealphaValor, //  DECLARO EL TICKET QUE VOYT A ATENDER(VIENE CON NºTICKET Y ESCRITORIO)
        console.log(atenderValor);
        this.ultimos4.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4
        this.ultimos14.unshift(atenderValor);
        this.ultimos24.unshift(atenderValor);
        if (this.ultimos4.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4.splice(-1, 1);

            this.ultimos24.splice(-1, 1);
        }
        if (this.ultimos4.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
            this.ultimos14.splice(-1, 1);
        }
        if (this.ultimos4.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
            this.ultimos24.splice(-1, 1);
        }
        console.log('Ultimos 4');
        console.log(this.ultimos4);
        this.grabarArchivo();
        // return atenderValor;

    }

    getUltimoValor() {

        return this.ultimo;
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
        this.ultimos14 = [];
        this.ultimos24 = [];

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            valores: this.valores,
            ultimos4: this.ultimos4,
            ultimos14: this.ultimos14,
            ultimos24: this.ultimos24
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./classes/data/data.json', jsonDataString);
    }


}
module.exports = {
    ValorControl
};