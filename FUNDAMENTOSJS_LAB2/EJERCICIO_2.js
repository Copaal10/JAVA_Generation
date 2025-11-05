
// declara la funcion, ponle los parametros
//   .length es una herramienta que cuenta vuelve el numero de caracteres en la cadena

function validarClave(clave) {
  let esLarga = clave.length >= 8;
  let tieneNumero = false;
  let tieneMayuscula = false;

  for (let letra of clave) {
    if (!isNaN(letra)) {
      tieneNumero = true;
    }
    if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
      tieneMayuscula = true;
    }
  }

  return esLarga && tieneNumero && tieneMayuscula;
}


const readline = require('readline');

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



entrada.question("Escribe tu clave: ", function(texto) {
  if (validarClave(texto)) {
    console.log("Clave válida");
  } else {
    console.log("Clave inválida. Debe tener al menos 8 caracteres, un número y una mayúscula.");
  }
  entrada.close();
});