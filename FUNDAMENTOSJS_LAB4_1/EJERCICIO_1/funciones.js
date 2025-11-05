const Vehiculo = require('./metodos');

class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()} - ${this.numeroPuertas} puertas`;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()} - ${this.cilindrada}cc`;
  }
}

module.exports = { Coche, Moto };