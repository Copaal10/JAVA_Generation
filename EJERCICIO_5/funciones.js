const Animal = require('./metodos');

class Perro extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }
}

class Gato extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }
}

module.exports = { Perro, Gato };