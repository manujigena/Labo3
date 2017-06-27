class Vehiculo {
    private _precioBase:number;
    private _motor:Motor;
    public marca:string;
    public modelo:string;
    private listaAccesorios:string[];

    constructor(precioBase:number,motor:Motor,marca:string,modelo:string) {
        this._precioBase=precioBase;
        this._motor=motor;
        this.marca=marca;
        this.modelo=modelo;
        this.listaAccesorios=[];
    }

    get PrecioBase():number{
        return this._precioBase;
    }
    set PrecioBase(precioBase:number){
        this._precioBase=precioBase;
    }

    get Motor():Motor{
        return this._motor;
    }
    set Motor(motor:Motor){
        this._motor=motor;
    }

    get ListaAccesorios():string[]{
        return this.listaAccesorios;
    }
    set ListaAccesorios(listaAccesorios:string[]){
        this;
    }

    public PrecioTotal(precioBase:number):number{
        let aux:number;
        aux=((precioBase*8)/100);        
        return aux+precioBase;
    }

    public agregarAccesorios(accessorios: Accesorio[]):void{
        this.listaAccesorios.push(accessorios);
    }
}