///<reference path="iCar"/>
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.getCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
///<reference path="Car"/>
//Para realizar a compilação o comando abaixo deve ser usado:
//tsc nome-do-arquivo-ts --out nome-do-arquivo-js
var gol = new Car("Gol", "Preto", 100);
gol.getCar();
