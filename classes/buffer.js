// **YO SIGO SIENDO SERVER**//

const fs = require('fs');

class Valor {
    constructor(pos1, dispo1, alpha1, beta1, gamma1, tiempo) { // , accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1/
        this.pos1 = pos1;
        this.dispo1 = dispo1;
        this.alpha1 = alpha1;
        this.beta1 = beta1;
        this.gamma1 = gamma1;
        this.tiempo = tiempo;

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
        this.SumaDeIntervalos = 0;
        this.Tmuestra = 2000;
        this.valores = [];
        this.valor = {};
        this.valorAnt = {};
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = [];
        this.possi = [];
        // agregar vector matrices y esa papa es la que va!
        let data = require('./data/data.json');

        this.ultimo = data.ultimo;
        this.SumaDeIntervalos = data.SumaDeIntervalos;
        this.Tmuestra = data.Tmuestra;
        this.valores = data.valores;
        this.valor = data.valor;
        this.valorAnt = data.valorAnt;
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
            // console.log('sacando');
            this.possi.unshift(alda);
        }
        this.grabarArchivo();
    }

    siguiente(dispo1, alpha1, beta1, gamma1, tiempo) { // ,  accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1
        let ind = 0;
        ind = this.possi.findIndex((element) => element === dispo1);

        if (ind === -1) {
            this.possi.push(dispo1);
            if (this.possi.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
                this.possi.shift();
                console.log('maximo 4 usuarios que envian datos');
            }
            this.ultimos4.push(dispo1);
            ind = this.possi.findIndex((element) => element === dispo1);
            this.ultimos4[ind] = [];
            console.log('primera vez');
            this.grabarArchivo();
        }


        // ahora grabo las pendiente en vez de los valores absolutos.

        if (this.ultimos4[ind][0] == null) {
            let valor = new Valor(ind, dispo1, 0, 0, 0, tiempo);
            this.ultimos4[ind].unshift(valor);
            this.grabarArchivo();
            console.log('return no habia anterior');
            return 'No habia anterior';
        } else {
            let ultValxdispo = this.ultimos4[ind][0];

            let Tinterval = tiempo - ultValxdispo.tiempo;
            this.SumaDeIntervalos = this.SumaDeIntervalos + Tinterval;
            // console.log('Tinterval, suma de.', Tinterval, this.SumaDeIntervalos);
            if (this.SumaDeIntervalos > 2000) {

                let diant = this.ultimos4[ind][0];
                console.log('thisultimos4', this.ultimos4[ind]);
                this.ultimos4[ind] = [];
                this.grabarArchivo();
                this.ultimos4[ind].unshift(diant);
                this.SumaDeIntervalos = 0;
                this.grabarArchivo();

            }
            if (Tinterval > 50) {
                let valar = new Valor(ind, dispo1, alpha1, beta1, gamma1, tiempo);


                let Ainterval = alpha1 - this.valorAnt.alpha1;
                let Binterval = beta1 - this.valorAnt.beta1;
                let Ginterval = gamma1 - this.valorAnt.gamma1;

                // calculando la pendiente de las 3 variables en func' del tiempo. m=(alpha-alpha')/(tiempo - tiempo')
                alpha1 = Math.floor(Ainterval / (Tinterval));
                beta1 = Math.floor(Binterval / (Tinterval));
                gamma1 = Math.floor(Ginterval / (Tinterval));
                let valor = new Valor(ind, dispo1, alpha1, beta1, gamma1, tiempo);
                // this.valores.push(valor);
                this.valor = valor;
                this.ultimos4[ind].unshift(valor);
                this.valorAnt = valar;
                this.grabarArchivo();

            }
        }
    }





    // analisisUltimos4(ultimos4) {

    //     // let al = 0;
    //     // for (al; al < ultimos4l.length; al++) {
    //     if (ultimos4[0][0] == undefined) {
    //         ultimos4[0][0] = '0';
    //         this.codigoEvento = [];
    //         this.codigoEvento.push(ultimos4[0][0].dispo1);
    //         this.codigoEvento.push(0);
    //         return this.codigoEvento;
    //     }
    //     if (ultimos4[0][3] == undefined) {
    //         ultimos4[0][3] = '0';
    //         this.codigoEvento = [];
    //         this.codigoEvento.push(ultimos4[0][0].dispo1);
    //         this.codigoEvento.push(0);
    //         return this.codigoEvento;
    //     }

    //     if (ultimos4[0][0].beta1 > 2 * (ultimos4[0][3].beta1)) {
    //         console.log('es mayor');
    //         this.codigoEvento = [];
    //         this.codigoEvento.push(ultimos4[0][0].dispo1);
    //         this.codigoEvento.push(1);
    //         console.log('coevif', this.codigoEvento);
    //         return this.codigoEvento;
    //     } else {

    //         this.codigoEvento = [];
    //         this.codigoEvento.push(ultimos4[0][0].dispo1);
    //         this.codigoEvento.push(2);
    //         console.log('coevelse[1]', this.codigoEvento);
    //         return this.codigoEvento;
    //     }


    // }
    getDispositivosConectados() {

        return this.possi;
    }
    getDispositivosConectadosporPos(po) {

        return this.possi[po];
    }

    getUltimoValor() {
        return this.valor;
        // return this.valores[this.valores.length - 1];
    }
    getCodigoEvento() {

        return this.codigoEvento;
    }

    getUltimos4() {

        return this.ultimos4;
    }
    getUltimos4Dispo(ind) {

        return this.ultimos4[ind];
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
        this.valorAnt = {};
        this.ultimos4 = [];
        this.ultimos14 = [];
        this.ultimos24 = [];
        this.codigoEvento = [];
        this.possi = [];
        this.SumaDeIntervalos = 0;
        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            Tmuestra: this.Tmuestra,
            valores: this.valores,
            valores4: this.valores4,
            valorAnt: this.valorAnt,
            ultimos4: this.ultimos4,
            ultimos14: this.ultimos14,
            ultimos24: this.ultimos24,
            codigoEvento: this.codigoEvento,
            possi: this.possi,
            SumaDeIntervalos: this.SumaDeIntervalos
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./classes/data/data.json', jsonDataString);
    }
}
module.exports = {
    ValorControl
};

// TO DO THINGHS...yellow
// determinar de modo fehaciente ubicacion y horario de los clientes... mas alla de errores en su configuracion.

// retomar el valor anterior para cada variable.
// calcular la pendiente




// CODIGO VIEJO:

// let accelerationx1Valor = this.getUltimoValor().accelerationx1;
// let accelerationy1Valor = this.getUltimoValor().accelerationy1;
// let accelerationz1Valor = this.getUltimoValor().accelerationz1;
// let accelerationincludinggravityx1Valor = this.getUltimoValor().accelerationincludinggravityx1;
// let accelerationincludinggravityy1Valor = this.getUltimoValor().accelerationincludinggravityy1;
// let accelerationincludinggravityz1Valor = this.getUltimoValor().accelerationincludinggravityz1;
// let rotationratebeta1Valor = this.getUltimoValor().rotationratebeta1;
// let rotationrategamma1Valor = this.getUltimoValor().rotationrategamma1;
// let rotationratealpha1Valor = this.getUltimoValor().rotationratealpha1;



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