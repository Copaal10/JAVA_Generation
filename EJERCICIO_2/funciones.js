const Empleado = require('./metodos');

class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

module.exports = { Gerente, Desarrollador };