const { Perro, Gato } = require('./funciones');

const firulais = new Perro("Firulais", 5);
const michi = new Gato("Michi", 3);

firulais.emitirSonido();
michi.emitirSonido();