// Verifica si todos los valores son números válidos
function validarNumeros(...numeros) {
  return numeros.every(num => !isNaN(num));
}

// Ordena los números de mayor a menor y menor a mayor
function ordenarNumeros(n1, n2, n3) {
  const arr = [n1, n2, n3];
  const descendente = [...arr].sort((a, b) => b - a);
  const ascendente = [...arr].sort((a, b) => a - b);
  return { descendente, ascendente };
}

// Verifica si todos los números son iguales
function sonIguales(n1, n2, n3) {
  return n1 === n2 && n2 === n3;
}

// Muestra resultados en el DOM
function mostrarResultado(texto) {
  const div = document.getElementById("resultado");
  const p = document.createElement("p");
  p.textContent = texto;
  div.appendChild(p);
}