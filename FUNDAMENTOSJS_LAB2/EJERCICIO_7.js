//App bancaria.
//Crea una función retirarDinero(saldo, monto) que:
//Pide al usuario su saldo actual y el monto a retirar.
//Muestra el nuevo saldo o "Fondos insuficientes"

const readline = require("readline");

function retirarDinero() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ingrese su saldo actual: ", (saldoInput) => {
    const saldo = parseFloat(saldoInput);

    rl.question("Ingrese el monto a retirar: ", (montoInput) => {
      const monto = parseFloat(montoInput);

      if (isNaN(saldo) || isNaN(monto)) {
        console.log("❌ Entrada inválida. Debe ingresar números.");
      } else if (monto <= saldo) {
        const nuevoSaldo = saldo - monto;
        console.log(`✅ Retiro exitoso. Su nuevo saldo es: $${nuevoSaldo.toFixed(2)}`);
      } else {
        console.log("⚠️ Fondos insuficientes");
      }

      rl.close();
    });
  });
}

retirarDinero();