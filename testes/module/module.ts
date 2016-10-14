///<reference path="Color.ts"/>

//Sobrecarga do módulo
module colorModule{
    var red = new colorModule.Color();
    red.name = "Red";
    red.code = "#1234";
    
    console.log(red.getColor());
}

//Utilização do módulo sem a sobrecarga
var black = new colorModule.Color();
black.name = "Black";
black.code = "#56789";

console.log(black.getColor());