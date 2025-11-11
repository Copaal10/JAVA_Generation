
let texto = "Hola soy estudiante de JavaScript";


function contarPalabras(texto) {

  let palabras = texto.split(" ");


  if (palabras.length === 0) {
    return 0;
  }

  let contador = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] !== "") {
      contador = contador + 1;
    }
  }

  /// retrnoa el contador
  return contador;
}


// Ejecutam la función y muesta el resultado
let totalPalabras = contarPalabras(texto);
console.log("Número de palabras:", totalPalabras);