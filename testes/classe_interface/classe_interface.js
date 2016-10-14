var Txt = (function () {
    function Txt(valueTxt) {
        this.valueTxt = valueTxt;
    }
    Txt.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    ;
    Txt.prototype.printTxt = function (value) {
        console.log(value);
    };
    return Txt;
}());
var t = new Txt("teste");
console.log(t.countTxt());
t.printTxt("Testando");
//Classe será obrigada a implementar as três interface devido a herança de iCar
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.getPower = function () {
        return this.power;
    };
    Car.prototype.getCar = function () {
        return this.name;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}());
var car = new Car("Gol", "Preto", 100);
console.log({ nome: car.getCar(), cor: car.getColor(), potencia: car.getPower() });
//# sourceMappingURL=classe_interface.js.map