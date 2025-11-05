

// define primero las variables
let total = 100;        
let porcentaje = 15;    

// define funcion, despues coloca el nombre, (aca va los valores que se usan), 
// let es una palabra clave que permite crear una variable cuyo valor puede cambiar a lo largo del programa
// genera el calculo para determinar la proprina + el total
// reterona la responesta

function calcularPropina(total, porcentaje) {
  let propina = total * (porcentaje / 100);
  let montoFinal = total + propina;
  return montoFinal;
}

let resultado = calcularPropina(total, porcentaje);


console.log("Monto final a pagar:", resultado);