// **YO SIGO SIENDO SERVER**//

const fs = require('fs');


class Valor {
    constructor(numero, numero1, numero2, canal, cond1) {

        this.numero = numero;
        this.numero1 = numero1; // frecuencia
        this.numero2 = numero2; // long pulse
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



    siguiente(numero1, numero2, canal) {
        this.ultimo = this.ultimo + 1;

        let valor = new Valor(this.ultimo, numero1, numero2, canal);
        this.valores.push(valor);

        this.grabarArchivo();
        if (this.valores.length === 0) { //VERIFICA QUE HAYAN TICKETS PENDIENTES DE ATENDER
            return 'No hay Valores';
        }

        let numeroValor = this.valores[0].numero; // EXTRAIGO EL NUMERO PARA ROMPER LA RELACION QUE TIENE JSCRIPT CON QUE TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
        let numero1Valor = this.valores[0].numero1;
        let numero2Valor = this.valores[0].numero2;

        this.valores.shift(); // ELIMINO LA PRIMERA POSICION DEL ARREGLO
        let atenderValor = new Valor(numeroValor, numero1Valor, numero2Valor, canal); // DECLARO EL TICKET QUE VOYT A ATENDER(VIENE CON NºTICKET Y ESCRITORIO)
        console.log(atenderValor);
        this.ultimos4.unshift(atenderValor); // UBICO ESTE TICKET AL INICIO DEL ARREGLO DEL LOS ULTIMOS 4
        this.ultimos14.unshift(numero1Valor);
        this.ultimos24.unshift(numero2Valor);
        if (this.ultimos4.length > 4) { // VERIFICO QUE SIEMPRE SEAN 4
            this.ultimos4.splice(-1, 1);
            this.ultimos14.splice(-1, 1);
            this.ultimos24.splice(-1, 1);
        }
        console.log('Ultimos 4');
        console.log(this.ultimos4);
        this.grabarArchivo();
        // return atenderValor;

    }

    getUltimoValor() {

        return `Valor ${this.ultimo}`;
    }
    getUltimos4() {

        return this.ultimos4;
    }
    getUltimos14() {

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