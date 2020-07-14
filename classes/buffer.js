// **YO SIGO SIENDO SERVER**//

const fs = require('fs');

class Valor {
    constructor(pos1, dispo1, alpha1, beta1, gamma1) { // , accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1/
        this.pos1 = pos1;
        this.dispo1 = dispo1;
        this.alpha1 = alpha1;
        this.beta1 = beta1;
        this.gamma1 = gamma1;

        // this.accelerationx1 = accelerationx1;
        // this.accelerationy1 = accelerationy1;
        // this.accelerationz1 = accelerationz1;
        // this.accelerationincludinggravityx1 = accelerationincludinggravityx1;
        // this.accelerationincludinggravityy1 = accelerationincludinggravityy1;
        // this.accelerationincludinggravityz1 = accelerationincludinggravityz1;
        // this.rotationratebet1a = rotationratebeta1;
        // this.rotationrategamma1 = rotationrategamma1;
        // this.rotationratealpha1 = rotationratealpha1;
        // this.canal = canal;
        // this.cond1 = cond1;
    }
}
class Posicion {
    constructor(Mpos1, Mdispo1, posX, posY) {
        this.Mpos1 = Mpos1;
        this.Mdispo1 = Mdispo1;
        this.posX = posX;
        this.posY = posY;
    }
}
class ValorControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDay();
        this.Mvalores = [];
        this.valores = [];
        this.valor = {};
        this.Mvalor = {};
        this.poss = [];
        this.Multimos4 = [];
        this.Multimos14 = [];
        this.Multimos24 = [];
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = [];
        this.possi = [];
        // agregar vector matrices y esa papa es la que va!
        let data = require('./data/data.json');

        this.ultimo = data.ultimo;
        this.Mvalores = data.Mvalores;
        this.valores = data.valores;
        this.valor = data.valor;
        this.Mvalor = data.Mvalor;
        this.poss = data.poss;
        this.Multimos4 = data.Multimos4;
        this.Multimos14 = data.Multimos14;
        this.Multimos24 = data.Multimos24;
        this.ultimos4 = data.ultimos4;
        this.ultimos14 = data.ultimos14;
        this.ultimos24 = data.ultimos24;
        this.codigoEvento = data.codigoEvento;
        this.possi = data.possi;
        this.reiniciarConteo();

    }


    sacarDlista(nombre) {
        let culo = 0;
        let cho = (this.possi.indexOf(nombre) - this.possi.length);
        cho = cho + 1;
        for (culo; culo < cho; culo++) {
            let alda = this.possi.pop();
            // console.log('sacando', this.possi);
            this.possi.unshift(alda);
        }
        this.grabarArchivo();
    }
    posiMouse(Mdispo1, posX, posY) {

        let ind = 0;
        ind = this.possi.findIndex((element) => element === Mdispo1);

        if (ind === -1) {
            this.possi.unshift(Mdispo1);
            if (this.possi.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
                this.possi.splice(-1, 1);
            }
            ind = this.possi.length - 1;
            console.log('this.possi', this.possi[0], ind);
            let Mvalor = new Posicion(ind, Mdispo1, posX, posY);
            this.Mvalores.push(Mvalor);
            this.Mvalor = Mvalor;
            this.Multimos4.push(Mdispo1);
            let Moned4 = this.Multimos4.length - 1;
            this.Multimos4[Moned4] = [];
            this.Multimos24.push(Mdispo1);
            let Moned24 = this.Multimos24.length - 1;
            this.Multimos24[Moned24] = [];

            this.grabarArchivo();
        } else {
            let Mvalor = new Posicion(ind, Mdispo1, posX, posY);
            this.Mvalores.push(Mvalor);
            this.Mvalor = Mvalor;

            this.grabarArchivo();
        }
        // { pos1, dispo1, beta1, gamma1, alpha1, accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1 };
        if (this.Mvalores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }
        let Mpos1Valor = this.getUltimoMValor().Mpos1;
        let Mdispo1Valor = this.getUltimoMValor().Mdispo1;
        let posXValor = this.getUltimoMValor().posX;
        let posYValor = this.getUltimoMValor().posY;

        this.Mvalores.shift(); // ELIMINO LA PRIMERA POSICION DEL ARREGLO
        let atenderValor = new Posicion(Mpos1Valor, Mdispo1Valor, posXValor, posYValor); // ,  accelerationx1Valor, accelerationy1Valor, accelerationz1Valor, accelerationincludinggravityx1Valor, accelerationincludinggravityy1Valor, accelerationincludinggravityz1Valor, rotationratebeta1Valor, rotationrategamma1Valor, rotationratealpha1Val
        this.Multimos4[Mpos1Valor].unshift(atenderValor);

        if (this.Multimos4[Mpos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.Multimos4[Mpos1Valor].splice(-1, 1);
        }
        this.Multimos24[Mpos1Valor].unshift(atenderValor);
        if (this.Multimos24[Mpos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.Multimos24[Mpos1Valor].splice(-1, 1);
        }

        console.log('thisult4', this.Multimos4);

        this.grabarArchivo();
        //  this.analisisUltimos4(this.ultimos4);
        //  console.log('todo-0', this.Multimos4[0][0].posX);

    }
    siguiente(dispo1, alpha1, beta1, gamma1) { // ,  accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1
        this.ultimo = this.ultimo + 1;
        let ind = 0;
        ind = this.possi.findIndex((element) => element === dispo1);

        if (ind === -1) {
            this.possi.unshift(dispo1);
            if (this.possi.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
                this.possi.splice(-1, 1);
            }
            ind = this.possi.length - 1;
            console.log('this.possi', this.possi[0], ind);
            let valor = new Valor(ind, dispo1, alpha1, beta1, gamma1);
            this.valores.push(valor);
            this.valor = valor;
            this.ultimos4.push(dispo1);
            let oned4 = this.ultimos4.length - 1;
            this.ultimos4[oned4] = [];
            this.ultimos24.push(dispo1);
            let oned24 = this.ultimos24.length - 1;
            this.ultimos24[oned24] = [];

            this.grabarArchivo();
        } else {
            let valor = new Valor(ind, dispo1, alpha1, beta1, gamma1);
            this.valores.push(valor);
            this.valor = valor;
        }
        // { pos1, dispo1, beta1, gamma1, alpha1, accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1 };
        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }
        let pos1Valor = this.getUltimoValor().pos1;
        let dispo1Valor = this.getUltimoValor().dispo1;
        let alpha1Valor = this.getUltimoValor().alpha1;
        let beta1Valor = this.getUltimoValor().beta1;
        let gamma1Valor = this.getUltimoValor().gamma1;
        // let accelerationx1Valor = this.getUltimoValor().accelerationx1;
        // let accelerationy1Valor = this.getUltimoValor().accelerationy1;
        // let accelerationz1Valor = this.getUltimoValor().accelerationz1;
        // let accelerationincludinggravityx1Valor = this.getUltimoValor().accelerationincludinggravityx1;
        // let accelerationincludinggravityy1Valor = this.getUltimoValor().accelerationincludinggravityy1;
        // let accelerationincludinggravityz1Valor = this.getUltimoValor().accelerationincludinggravityz1;
        // let rotationratebeta1Valor = this.getUltimoValor().rotationratebeta1;
        // let rotationrategamma1Valor = this.getUltimoValor().rotationrategamma1;
        // let rotationratealpha1Valor = this.getUltimoValor().rotationratealpha1;
        this.valores.shift(); // ELIMINO LA PRIMERA POSICION DEL ARREGLO
        let atenderValor = new Valor(pos1Valor, dispo1Valor, alpha1Valor, beta1Valor, gamma1Valor); // ,  accelerationx1Valor, accelerationy1Valor, accelerationz1Valor, accelerationincludinggravityx1Valor, accelerationincludinggravityy1Valor, accelerationincludinggravityz1Valor, rotationratebeta1Valor, rotationrategamma1Valor, rotationratealpha1Val
        this.ultimos4[pos1Valor].unshift(atenderValor);
        if (this.ultimos4[pos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4[pos1Valor].splice(-1, 1);
        }
        this.ultimos24[pos1Valor].unshift(atenderValor);
        if (this.ultimos24[pos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos24[pos1Valor].splice(-1, 1);
        }

        // console.log('thisult4', this.ultimos4);



        // this.ultimos4[pos1Valor].unshift(atenderValor);
        // this.ultimos4[pos1Valor].unshift(atenderValor);
        // if (this.ultimos4[pos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
        //     this.ultimos4[pos1Valor].splice(-1, 1);
        // }
        // this.ultimos14[pos1Valor].unshift(atenderValor);
        // if (this.ultimos14[pos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
        //     this.ultimos14[pos1Valor].splice(-1, 1);
        // }
        // this.ultimos24[pos1Valor].unshift(atenderValor);
        // if (this.ultimos24[pos1Valor].length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
        //     this.ultimos24[pos1Valor].splice(-1, 1);
        // }

        this.grabarArchivo();
        this.analisisUltimos4(this.ultimos4);

        // console.log('todo-0', this.ultimos4[0][0].beta1);
        // console.log('todo-1', this.ultimos4[1]);
    }
    analisisUltimos4(ultimos4) {

        // let al = 0;
        // for (al; al < ultimos4l.length; al++) {
        if (ultimos4[0][0] == undefined) {
            ultimos4[0][0] = '0';
            this.codigoEvento = [];
            this.codigoEvento.push(ultimos4[0][0].dispo1);
            this.codigoEvento.push(0);
            return this.codigoEvento;
        }
        if (ultimos4[0][3] == undefined) {
            ultimos4[0][3] = '0';
            this.codigoEvento = [];
            this.codigoEvento.push(ultimos4[0][0].dispo1);
            this.codigoEvento.push(0);
            return this.codigoEvento;
        }

        if (ultimos4[0][0].beta1 > 2 * (ultimos4[0][3].beta1)) {
            console.log('es mayor');
            this.codigoEvento = [];
            this.codigoEvento.push(ultimos4[0][0].dispo1);
            this.codigoEvento.push(1);
            //   console.log('coevif', this.codigoEvento);
            return this.codigoEvento;
        } else {

            this.codigoEvento = [];
            this.codigoEvento.push(ultimos4[0][0].dispo1);
            this.codigoEvento.push(2);
            //  console.log('coevelse[1]', this.codigoEvento);
            return this.codigoEvento;
        }


    }
    getDispositivosConectados() {

        return this.possi;
    }
    getDispositivosConectadosporPos(po) {

        return this.possi[po];
    }

    getUltimoValor() {

        return this.valor;
    }
    getUltimoMValor() {

        return this.Mvalor;
    }

    getCodigoEvento() {

        return this.codigoEvento;
    }

    getUltimos4() {

        return this.ultimos4;
    }
    getUltimos4Dispo(pos) {

        return this.ultimos4.filter(valor => valor.pos1 === pos);
    }
    getUltimos14() {

        return this.ultimos14;
    }
    getUltimos24() {

        return this.ultimos14;
    }

    reiniciarConteo() {

        this.ultimo = 0;
        this.Mvalores = [];
        this.valores = [];
        this.valor = {};
        this.Mvalor = {};
        this.poss = [];
        this.Multimos4 = [];
        this.Multimos14 = [];
        this.Multimos24 = [];
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = [];
        this.possi = [];
        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            valores: this.valores,
            Mvalores: this.Mvalores,
            poss: this.poss,
            Multimos4: this.Multimos4,
            Multimos14: this.Multimos14,
            Multimos24: this.Multimos24,
            ultimos4: this.ultimos4,
            ultimos14: this.ultimos14,
            ultimos24: this.ultimos24,
            codigoEvento: this.codigoEvento,
            possi: this.possi
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./classes/data/data.json', jsonDataString);
    }
}
module.exports = {
    ValorControl
};