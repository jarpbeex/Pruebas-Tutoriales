console.log("Script funcionando");

// -----------------------------------------------------------------------------------
// 9.1 PARADIGMA

// EJEMPLO

console.log('        EJEMPLO 9.1');

class Persona {
  constructor ( nombre, edad ) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anios.`);
  }
}

const persona1 = new Persona('Juan', 25);
persona1.saludar();

console.log('        RETO    9.1');

class Auto {
    constructor(nCarro, marca, modelo, anio) {
        this.nCarro = nCarro;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    mostrarInfo(){
        console.log(`La info del auto ${this.nCarro} es: Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`);
    }
}

const auto1 = new Auto( 1, 'Buggati', 'Veiron', '2018' );
const auto2 = new Auto( 2, 'Ferrari', 'r323', '2023' );
const auto3 = new Auto( 3, 'MClaren', 'wayomil', '2021' );

auto1.mostrarInfo();
auto2.mostrarInfo();
auto3.mostrarInfo();

console.log("");

// -----------------------------------------------------------------------------------
// 9.2 FUNCION CONSTRUCTORA

console.log('        EJEMPLO 9.2');

console.log('        RETO    9.1');
function carro(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}
let carro1 = new carro('Nissan', 'xd', '2024');
console.log(carro1.marca); 
console.log(carro1.modelo); 
console.log(carro1.año);

console.log("");

// -----------------------------------------------------------------------------------
// 9.3 CONTEXTO


