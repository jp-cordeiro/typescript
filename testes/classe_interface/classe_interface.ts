interface iCountString {
    valueTxt:string;
    countTxt():number;
}

interface iPrintTxt {
    printTxt(value:string):void;
}

class Txt implements iCountString,iPrintTxt {
    public constructor(public valueTxt:string) {
    }

    countTxt():number {
        return this.valueTxt.length;
    };

    printTxt(value:string) {
        console.log(value);
    }
}

var t = new Txt("teste");
console.log(t.countTxt());
t.printTxt("Testando");

interface iCarString {
    name:string;
    getCar():string;
}

interface iCarColor {
    color:string;
    getColor():string;
}

//Interface que herda de outras duas simultâneamente
interface iCar extends iCarString,iCarColor {
    power:number;
    getPower():number;
}

//Classe será obrigada a implementar as três interface devido a herança de iCar
class Car implements iCar {

    constructor(public name:string, public color:string, public power:number){

    }

    getPower():number {
        return this.power;
    }

    getCar():string {
        return this.name;
    }

    getColor():string {
        return this.color;
    }

}

var car = new Car("Gol","Preto",100);

console.log({nome:car.getCar(),cor:car.getColor(),potencia:car.getPower()});