class Carro {

    public constructor(public nome:string,
                       public cor:string,
                       public potencia:number) {};

}

var gol = new Carro("Gol", "Verde", 100);

console.log(gol);

class Carro2 {
    private _nome:string;
    private _cor:string;
    private _potencia:number;
    private _marca:string;

    public constructor(newNome:string,
                       newCor:string,
                       newPotencia:number) {

        this._nome = newNome;
        this._cor = newCor;
        this._potencia = newPotencia;
    };


    get nome():string {
        return this._nome;
    }

    set nome(value:string) {
        this._nome = value;
    }

    get cor():string {
        return this._cor;
    }

    set cor(value:string) {
        this._cor = value;
    }

    get potencia():number {
        return this._potencia;
    }

    set potencia(value:number) {
        this._potencia = value;
    }

    get marca():string {
        return this._marca;
    }

    set marca(value:string) {
        this._marca = value;
    }
}

var ftUno = new Carro2("Fiat Uno", "Preto", 100);
//Atribuições de gets e setters são feitas através do '='
ftUno.marca = "Fiat";
console.log(ftUno);
