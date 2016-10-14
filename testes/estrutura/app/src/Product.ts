///<reference path="iProduct.ts"/>
module App {
    export class Product implements iProduct {
        
        constructor(public name:string,
                    public desc:string,
                    public value:number) {
        }
    }
}