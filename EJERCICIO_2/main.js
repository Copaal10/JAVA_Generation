const { Gerente, Desarrollador } = require('./funciones');

const gerente = new Gerente("Laura", 40, 5000, 1500);
const dev = new Desarrollador("Carlos", 28, 4000, "JavaScript");

console.log(`Salario de ${gerente.nombre}: $${gerente.calcularSalario()}`);
console.log(`Salario de ${dev.nombre}: $${dev.calcularSalario()}`);