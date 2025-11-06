const Producto = require('./metodos');

class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `${super.descripcion()} - ${this.almacenamiento}GB / ${this.ram}GB RAM`;
  }
}

class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${super.descripcion()} - ${this.procesador} / ${this.pulgadas}"`;
  }
}

module.exports = { Telefono, Laptop };