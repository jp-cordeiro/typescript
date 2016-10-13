//Export: Possibilita ao elemento ser acessível externamente, ou seja, exportá-lo

module Interface{
    export interface  iCar {
        name:string;
        color:string;
    }
}

module Class {
    export class Car implements Interface.iCar {
        name:string;
        color:string;
    }
}

var car = new Class.Car();
