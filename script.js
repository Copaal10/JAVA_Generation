let valor = 0;

function actualizarContador() {
  const contador = document.getElementById("contador");
  contador.textContent = valor;

  // Cambiar color si llega a 10
  if (valor === 10) {
    contador.style.color = "red";
  } else {
    contador.style.color = "black";
  }
}

function incrementar() {
  valor++;
  actualizarContador();
}

function decrementar() {
  valor--;
  actualizarContador();
}