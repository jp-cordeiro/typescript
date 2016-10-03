function getHello(name:string) {
    return "Hello " + name;
}

var nome = "Fulano";

window.onload = function () {
    document.body.innerHTML = getHello(nome);
}

interface iCarro {
    marca:string;
    nome:string;
    potencia:number;
}

class Carro implements iCarro {
    marca:string;
    nome:string;
    potencia:number;

    Carro(marca, nome, potencia) {
        this.marca = marca;
        this.nome = nome;
        this.potencia = potencia;
    }
}

var getCarro = function (car) {
    console.log(JSON.stringify(car));
};

var camaro = new Carro();
camaro.marca = "Chevrolet";
camaro.nome = "Camaro";
camaro.potencia = 45;

getCarro(camaro);