var test = false;
// Numéricos
var decimal = 5.4;
var hex = 0xf00d;
var binary = 484;
// Strng
var name = "Fulano";
var text = " \n<p> Name: " + name + " </p>\n";
// Array
var frutas = ['Maça', 'Banana', 'Limão'];
var frutas2 = ['Melão', 'Melancia', 'Laranja'];
console.log(frutas);
console.log(frutas2);
console.log("");
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
console.log("\n" + JSON.stringify(Cor) + "\n");
// Any
//Com o tipo Any pode-se atribuir qualquer coisa à viriável
var list = 23;
list = 'abc';
//Void
function printHello() {
    console.log("\n Hello World \n");
}
;
printHello();
//# sourceMappingURL=tipos.js.map