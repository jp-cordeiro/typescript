///<reference path="Color.ts"/>
//Sobrecarga do módulo
var colorModule;
(function (colorModule) {
    var red = new colorModule.Color();
    red.name = "Red";
    red.code = "#1234";
    console.log(red.getColor());
})(colorModule || (colorModule = {}));
//Utilização do módulo sem a sobrecarga
var black = new colorModule.Color();
black.name = "Black";
black.code = "#56789";
console.log(black.getColor());
//# sourceMappingURL=module.js.map