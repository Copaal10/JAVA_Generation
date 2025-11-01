const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables simples
let tasaUSD = 1 / 4000; // 1 peso = 0.00025 USD
let monedasDisponibles = ["USD"];

rl.question("Ingrese el monto en pesos colombianos (COP): ", function(montoTexto) {
  let monto = parseFloat(montoTexto);

  if (isNaN(monto) || monto <= 0) {
    console.log("❌ Monto inválido.");
    rl.close();
    return;
  }

  rl.question("Ingrese la moneda destino (solo USD): ", function(moneda) {
    moneda = moneda.toUpperCase();

    if (monedasDisponibles.includes(moneda)) {
      let resultado = monto * tasaUSD;
      console.log("Resultado: " + resultado.toFixed(2) + " USD");
    } else {
      console.log("oneda no válida. Solo se permite USD.");
    }

    rl.close();
  });
});