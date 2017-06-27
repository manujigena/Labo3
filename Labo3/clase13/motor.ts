class Motor {
    public pontencia:number;
    public tipo:string;

    constructor(potencia:number, tipo:string) {
        this.pontencia=potencia;
        this.tipo=tipo;
    }

    public Encender(callback:(estado:boolean,tipo:string)=>void):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }

    public Apagar(callback:(estado:boolean,tipo:string)=>void):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }

    callback(estado:boolean, tipo:string):void{        
    }
}