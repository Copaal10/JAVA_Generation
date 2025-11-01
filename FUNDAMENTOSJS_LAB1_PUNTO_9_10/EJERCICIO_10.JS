const entrada = require("readline");

const teclado = entrada.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question("Escribe un número para ver su tabla: ", (texto) => {
  const numero = Number(texto);

  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }

  teclado.close();
});