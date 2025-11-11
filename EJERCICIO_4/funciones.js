const Figura = require('./metodos');

class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}

class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio ** 2;
  }
}

module.exports = { Rectangulo, Circulo };