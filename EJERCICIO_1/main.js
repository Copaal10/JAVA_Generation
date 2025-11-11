const { Coche, Moto } = require('./funciones');

const miCoche = new Coche("Toyota", "Corolla", 2020, 4);
const miMoto = new Moto("Yamaha", "R3", 2022, 321);

console.log(miCoche.obtenerDetalles());
console.log(miMoto.obtenerDetalles());