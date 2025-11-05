const { Rectangulo, Circulo } = require('./funciones');

const rect = new Rectangulo("Rojo", 5, 10);
const circ = new Circulo("Azul", 7);

console.log(`Área del rectángulo (${rect.color}): ${rect.area()}`);
console.log(`Área del círculo (${circ.color}): ${circ.area().toFixed(2)}`);