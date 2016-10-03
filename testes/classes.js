var Carro = (function () {
    function Carro(nome, cor, potencia) {
        this.nome = nome;
        this.cor = cor;
        this.potencia = potencia;
    }
    ;
    return Carro;
}());
var gol = new Carro("Gol", "Verde", 100);
console.log(gol);
var Carro2 = (function () {
    function Carro2(newNome, newCor, newPotencia) {
        this._nome = newNome;
        this._cor = newCor;
        this._potencia = newPotencia;
    }
    ;
    Object.defineProperty(Carro2.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro2.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (value) {
            this._cor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro2.prototype, "potencia", {
        get: function () {
            return this._potencia;
        },
        set: function (value) {
            this._potencia = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro2.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: true,
        configurable: true
    });
    return Carro2;
}());
var ftUno = new Carro2("Fiat Uno", "Preto", 100);
//Atribuições de gets e setters são feitas através do '='
ftUno.marca = "Fiat";
console.log(ftUno);
//# sourceMappingURL=classes.js.map