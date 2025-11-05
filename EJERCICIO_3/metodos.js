class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `${this.nombre} - ${this.marca} - $${this.precio}`;
  }
}

module.exports = Producto;