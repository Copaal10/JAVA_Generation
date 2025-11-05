class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log("El animal emite un sonido genérico.");
  }
}

module.exports = Animal;