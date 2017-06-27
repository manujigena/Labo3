// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,true] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
    fuerzaBatman = 1,
    fuerzaAcuaman = 0  
}

let fuerzaFlash:Fuerza = Fuerza.fuerzaFlash;
let fuerzaSuperman:Fuerza = Fuerza.fuerzaSuperman;
let fuerzaBatman:Fuerza = Fuerza.fuerzaBatman;
let fuerzaAcuaman:Fuerza = Fuerza.fuerzaAcuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:any = 100;
//seria como castear a string y poder usar los metodos
let largoDelPoder = (<string>poder).length;
console.log( largoDelPoder );

//map reduce filter