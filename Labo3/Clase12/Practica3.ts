
// Objetos
type auto={carroceria:string,modelo:string,antibalas:boolean,pasajeros:number,disparar?:()=>void}

let batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano={nombre:string,edad:number,mutante:boolean}

let villanos :villano[]= [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 1,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type carlos={poder:string, estatura:number}
type apo={lider:boolean,miembros:string[]}

let charles:carlos = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis:apo = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:carlos|apo;

mystique = charles;
mystique = apocalipsis;
