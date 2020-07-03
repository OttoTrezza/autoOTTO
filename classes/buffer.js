// **YO SIGO SIENDO SERVER**//

const fs = require('fs');
// , accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityy, accelerationincludinggravityz, rotationratebeta, rotationrategamma, rotationratealpha, canal, cond1


class Valor {
    constructor(dispositivo, beta1, gamma1, alpha1) {
        this.dispositivo = dispositivo;
        this.beta1 = beta1;
        this.gamma1 = gamma1;
        this.alpha1 = alpha1;
        // this.posenLista = [0];
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
        this.dispositivos = [];
        this.ultimos4a = [];
        this.ultimos14a = [];
        this.ultimos24a = [];
        this.ultimos4b = [];
        this.ultimos14b = [];
        this.ultimos24b = [];
        this.ultimos4c = [];
        this.ultimos14c = [];
        this.ultimos24c = [];
        this.codigoEvento = 2;

        let data = require('./data/data.json');
        console.log('data', data);
        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.valores = data.valores;
            this.valor = data.valor;
            this.dispositivos = data.dispositivos;
            this.ultimos4a = data.ultimos4a;
            this.ultimos14a = data.ultimos14a;
            this.ultimos24a = data.ultimos24a;
            this.ultimos4b = data.ultimos4b;
            this.ultimos14b = data.ultimos14b;
            this.ultimos24b = data.ultimos24b;
            this.ultimos4c = data.ultimos4c;
            this.ultimos14c = data.ultimos14c;
            this.ultimos24c = data.ultimos24c;
            this.codigoEvento = data.codigoEvento;
        } else {
            this.reiniciarConteo();
        }

    }

    siguiente(dispositivo, beta1, gamma1, alpha1) { // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
        this.ultimo = this.ultimo + 1;
        let valor = new Valor(this.ultimo, dispositivo, beta1, gamma1, alpha1); // accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha,
        this.valores.push(valor);

        console.log('DISPOSITIVOS', this.dispositivos);
        this.valor = { dispositivo, beta1, gamma1, alpha1 };
        this.grabarArchivo();

        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }
        // let dispositivor = this.getUltimoValor(dispositivo).dispositivo;
        let beta1Valor = this.getUltimoValor(dispositivo); // .beta1; // EXTRAIGO EL NUMERO PARA ROMPER LA RELACION QUE TIENE JSCRIPT CON QUE TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
        let gamma1Valor = this.getUltimoValor(dispositivo); // .gamma1;
        let alpha1Valor = this.getUltimoValor(dispositivo); // .alpha1;
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
        let atenderValor = new Valor(dispositivor, beta1Valor, gamma1Valor, alpha1Valor);
        this.ultimos4a.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4
        this.ultimos14a.unshift(atenderValor);
        this.ultimos24a.unshift(atenderValor);
        if (this.ultimos4a.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4a.splice(-1, 1);
        }
        if (this.ultimos14a.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
            this.ultimos14a.splice(-1, 1);
        }
        if (this.ultimos24a.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
            this.ultimos24a.splice(-1, 1);
        }
        // console.log('Ultimos 4');
        console.log(this.ultimos4a);
        this.grabarArchivo();
        // return atenderValor;
        this.analisisUltimos24(this.ultimos24a);

    }


    analisisUltimos24(ultimos24a) {
            if (ultimos24a[5] == undefined) {
                ultimos24a[5] = '0';
                this.codigoEvento = 0;
                return this.codigoEvento;
            }

            let betasaaa0 = ultimos24a[0].beta1;
            let betasaaa1 = ultimos24a[5].beta1;
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
        // el ultimo ticket por dispositivo
    getUltimoValor(dispositivo) {
        let valoreslis = this.valores.find(valoreslis => valoreslis.dispositivo === dispositivo);
        for (valoreslis of this.valores) {
            if (valoreslis.dispositivo === dispositivo) {
                return this.valor;
            }
        }
    }
    getDispositivos() {

        return this.dispositivos;
    }
    getThisDispositivo() {

        return this.dispositivo;
    }
    getCodigoEvento() {

        return this.codigoEvento;
    }

    getUltimos4(dispositivo) {

        return this.ultimos4.dispositivo;
    }
    getUltimos14(dispositivo) {

        return this.ultimos14.dispositivo;
    }
    getUltimos24(dispositivo) {

        return this.ultimos24.dispositivo;
    }

    reiniciarConteo() {

        this.ultimo = 0;
        this.valores = [];
        this.dispositivos = [];
        this.ultimos4a = [];
        this.ultimos14 = [];
        this.ultimos24a = [];
        this.ultimos4b = [];
        this.ultimos1b4 = [];
        this.ultimos24b = [];
        this.ultimos4c = [];
        this.ultimos1c = [];
        this.ultimos24c = [];
        this.codigoEvento = 0;

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            valores: this.valores,
            dispositivos: this.dispositivos,
            ultimos4a: this.ultimos4a,
            ultimos14a: this.ultimos14a,
            ultimos24a: this.ultimos24a,
            ultimos4b: this.ultimos4b,
            ultimos14b: this.ultimos14b,
            ultimos24b: this.ultimos24b,
            ultimos4c: this.ultimos4c,
            ultimos14c: this.ultimos14c,
            ultimos24c: this.ultimos24c,
            codigoEvento: this.codigoEvento
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./classes/data/data.json', jsonDataString);
    }


}
module.exports = {
    ValorControl
};