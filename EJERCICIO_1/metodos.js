class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `${this.marca} ${this.modelo} (${this.año})`;
  }
}

module.exports = Vehiculo;