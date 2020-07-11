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

class ValorControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDay();
        this.valores = [];
        this.valor = {};
        this.poss = [];
        this.pol = 0;
        this.ultimos4 = [{}];
        this.ultimos14 = [{}];
        this.ultimos24 = [{}];
        // this.ultimos4b = [];
        // this.ultimos14b = [];
        // this.ultimos24b = [];
        this.codigoEvento = 2;
        this.possi = [];
        // agregar vector matrices y esa papa es la que va!
        let data = require('./data/data.json');
        // console.log('data', data);

        this.pol = data.pol;
        this.ultimo = data.ultimo;
        this.valores = data.valores;
        this.valor = data.valor;
        this.poss = data.poss;
        this.ultimos4 = data.ultimos4;
        this.ultimos14 = data.ultimos14;
        this.ultimos24 = data.ultimos24;
        // this.ultimos4b = data.ultimos4b;
        // this.ultimos14b = data.ultimos14b;
        // this.ultimos24b = data.ultimos24b;
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
            // console.log('sacando');
            this.possi.unshift(alda);
        }
        this.grabarArchivo();
    }
    siguiente(pos1, dispo1, alpha1, beta1, gamma1) { // ,  accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1
        this.ultimo = this.ultimo + 1;
        let ind = 0;

        ind = this.possi.findIndex((element) => element === dispo1);

        pos1 = ind;

        // console.log('pos1, ind, dispo1', pos1, ind, dispo1);

        if (ind === -1) {
            this.possi.unshift(dispo1);
            pos1 = this.possi.length;
            console.log('this.possi', this.possi, pos1);
            let valar = new Valor('', '', '', '', '', '');
            let verga = { pos1: [valar] };

            this.ultimos4.unshift(verga);
            if (this.ultimos4.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
                this.ultimos4.splice(-1, 1);
            }
            this.ultimos14.unshift(verga);
            if (this.ultimos14.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
                this.ultimos14.splice(-1, 1);
            }

            // console.log('ultim4AB', this.ultimos4[pos1]); //, this.ultimos4[1]
            this.ultimos24.unshift(verga);
            if (this.ultimos24.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
                this.ultimos24.splice(-1, 1);
            }

            this.grabarArchivo();
        }





        let valor = new Valor(this.ultimo, pos1, dispo1, alpha1, beta1, gamma1); // ,  accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1
        this.valores.push(valor);
        this.valor = valor;
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


        let atenderValor = new Valor(pos1Valor, dispo1Valor, alpha1Valor, beta1Valor, gamma1Valor); // ,  accelerationx1Valor, accelerationy1Valor, accelerationz1Valor, accelerationincludinggravityx1Valor, accelerationincludinggravityy1Valor, accelerationincludinggravityz1Valor, rotationratebeta1Valor, rotationrategamma1Valor, rotationratealpha1Valor
        //  let analisisValor = { beta1Valor, gamma1Valor, alpha1Valor }; // console.log('atenderValor', atenderValor);

        this.ultimos4[pos1Valor].pos1verga.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4        
        if (this.ultimos4[pos1Valor].pos1verga.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4[pos1Valor].pos1verga.splice(-1, 1);
        }
        // this.ultimos4b.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4        
        // if (this.ultimos4b.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
        //     this.ultimos4b.splice(-1, 1);
        // }
        this.ultimos14[pos1Valor].pos1verga.unshift(atenderValor);
        if (this.ultimos14[pos1Valor].pos1verga.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
            this.ultimos14[pos1Valor].pos1verga.splice(-1, 1);
        }
        // this.ultimos14b.unshift(atenderValor);
        // if (this.ultimos14b.length > 14) { // VERIFICO QUE SIEMPRE SEAN 14
        //     this.ultimos14b.splice(-1, 1);
        // }
        this.ultimos24[pos1Valor].pos1verga.unshift(atenderValor);
        if (this.ultimos24[pos1Valor].pos1verga.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
            this.ultimos24[pos1Valor].pos1verga.splice(-1, 1);
        }
        // this.ultimos24b.unshift(atenderValor);
        // if (this.ultimos24b.length > 24) { // VERIFICO QUE SIEMPRE SEAN 24
        //     this.ultimos24b.splice(-1, 1);
        // }
        this.grabarArchivo();

        // console.log('ultim4B', this.ultimos4b);
        let sarda = [];
        sarda = this.ultimos4[pos1Valor].pos1verga;
        this.analisisUltimos4(sarda);
        // this.analisisUltimos14(this.ultimos14[1]);
        // let as = this.getUltimos4Dispo(pos1Valor);

        console.log('todo-0', this.ultimos4[0].pos1verga);
        console.log('todo-1', this.ultimos4[1].pos1verga);
    }
    analisisUltimos4(ultimos4l) {

        if (ultimos4l[0] == undefined) {
            ultimos4l[0] = '0';
            this.codigoEvento = 0;
            return this.codigoEvento;
        }
        if (ultimos4l[3] == undefined) {
            ultimos4l[3] = '0';
            this.codigoEvento = 0;
            return this.codigoEvento;
        }

        let betasaaa0 = ultimos4l[0].beta1;
        let betasaaa1 = ultimos4l[3].beta1;
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
        return this.possi;
    }
    getDispositivosConectadosporPos(po) {

        return this.possi[po];
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
        this.valores = [];
        this.poss = []; // 'sin dispositivo', 'sin dispositivo', 'sin dispositivo', 'sin dispositivo'
        this.ultimos4 = [{}];
        // this.ultimos4b = [];
        this.ultimos14 = [{}];
        //  this.ultimos14b = [];
        this.ultimos24 = [{}];
        //   this.ultimos24b = [];
        this.codigoEvento = 0;
        this.possi = [];
        this.pol = 0;

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            valores: this.valores,
            poss: this.poss,
            ultimos4: this.ultimos4,
            //   ultimos4: this.ultimos4,
            ultimos14: this.ultimos14,
            //   ultimos14: this.ultimos14,
            ultimos24: this.ultimos24,
            //    ultimos24: this.ultimos24,
            codigoEvento: this.codigoEvento,
            possi: this.possi,
            pol: this.pol
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./classes/data/data.json', jsonDataString);
    }


}
module.exports = {
    ValorControl
};