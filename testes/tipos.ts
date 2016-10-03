var test:boolean = false;

// Numéricos

var decimal:number = 5.4;
var hex:number = 0xf00d;
var binary: number = 0o744;


// Strng

var name : string = "Fulano";

var text : string = ` 
<p> Name: ${name} </p>
`;

// Array

var frutas : string[] = ['Maça','Banana','Limão'];

var frutas2 : Array<string> = ['Melão','Melancia','Laranja'];

console.log(frutas);
console.log(frutas2);
console.log("");

// Enum

enum Cor {
    Vermelho,
    Verde,
    Azul
}

console.log("\n"+JSON.stringify(Cor)+"\n");

// Any
//Com o tipo Any pode-se atribuir qualquer coisa à viriável
var list : any = 23;
list = 'abc';

//Void

function printHello():void{
console.log("\n Hello World \n");
};

printHello();