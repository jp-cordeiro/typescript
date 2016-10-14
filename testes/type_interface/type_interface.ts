interface iPeople {
    name:string;
    age:number;
}

function people(value:iPeople):void {
    console.log(value);
}

people({name: "Fulano", age: 19});

function people2(name:string, age:number):iPeople {
    return {name: name, age: age};
}

console.log(people2("Sicrano", 12));

interface iColor {
    //Dessa forma '?', este atributo é opcional, ou seja, não é obrigatório na implementação da interface
    title?:string;
    codColor:string;
}

function getColor(codColor:string, title?:string):iColor{
    if(title){
        return {title:title,codColor:codColor}
    }
    return {codColor:codColor};
}

console.log(getColor("#0000"));
console.log(getColor("#0000","Black"));

