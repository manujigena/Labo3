// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

let contar:(x:string[])=>number = function( heroes:string[] ):number{
  return heroes.length;
}

let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
let cantidad:number=contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean=true ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any[] ):void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(x:number,y:string,w:boolean,z:any[])=>void;
noHaceNadaTampoco=noHaceNada;
