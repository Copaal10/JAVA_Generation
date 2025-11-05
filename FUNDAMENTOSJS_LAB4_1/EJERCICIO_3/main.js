const { Telefono, Laptop } = require('./funciones');

const celular = new Telefono("Galaxy S21", 800, "Samsung", 128, 8);
const portatil = new Laptop("XPS 13", 1200, "Dell", "Intel i7", 13.3);

console.log(celular.descripcion());
console.log(portatil.descripcion());