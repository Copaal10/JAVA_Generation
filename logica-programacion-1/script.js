// Solicita los números al usuario
const num1 = Number(prompt("Ingresa el primer número:"));
const num2 = Number(prompt("Ingresa el segundo número:"));
const num3 = Number(prompt("Ingresa el tercer número:"));

if (!validarNumeros(num1, num2, num3)) {
  console.error("Uno o más valores no son números válidos.");
  mostrarResultado("Error: Ingresa solo números válidos.");
} else {
  console.log(`Números ingresados: ${num1}, ${num2}, ${num3}`);
  mostrarResultado(`Números ingresados: ${num1}, ${num2}, ${num3}`);

  if (sonIguales(num1, num2, num3)) {
    console.log("Todos los números son iguales.");
    mostrarResultado("Todos los números son iguales.");
  } else {
    const { descendente, ascendente } = ordenarNumeros(num1, num2, num3);

    console.log("Orden descendente:", descendente.join(", "));
    console.log("Orden ascendente:", ascendente.join(", "));

    mostrarResultado(`Orden descendente: ${descendente.join(", ")}`);
    mostrarResultado(`Orden ascendente: ${ascendente.join(", ")}`);
  }
}