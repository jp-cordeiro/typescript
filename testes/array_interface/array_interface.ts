interface iTypeFunc {
    //Contrato de parmetros e retorno, para estipular a assinatura de uma função
    (a:number, b:number):boolean
}

//Indica que a variável implementa a interface
var add:iTypeFunc;

add = function (varA:number, varB:number):boolean {
    return true;
}

interface iColor {
    (codColor:string, title?:string):{codColor:string,title?:string};
}

var getColor:iColor;

getColor = function (codColor:string,title?:string):{codColor:string,title?:string} {
    if(title){
        return {codColor:codColor,title:title}
    }
    return {codColor:codColor};
}

console.log(getColor("#0000","Black"));

//Interface de array
interface iArrayTypes{
    //Informa a obrigatoriedade de receber uma string
    [index:number]:string;
}

var a : iArrayTypes;

a = ["teste"];


console.log(a);