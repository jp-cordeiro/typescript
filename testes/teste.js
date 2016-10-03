function getHello(name) {
    return "Hello " + name;
}
var nome = "Fulano";
window.onload = function () {
    document.body.innerHTML = getHello(nome);
};
var Carro = (function () {
    function Carro() {
    }
    Carro.prototype.Carro = function (marca, nome, potencia) {
        this.marca = marca;
        this.nome = nome;
        this.potencia = potencia;
    };
    return Carro;
}());
var getCarro = function (car) {
    console.log(JSON.stringify(car));
};
var camaro = new Carro();
camaro.marca = "Chevrolet";
camaro.nome = "Camaro";
camaro.potencia = 45;
getCarro(camaro);
//# sourceMappingURL=teste.js.map