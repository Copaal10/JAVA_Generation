//  crear contadores  individuales //
let votosWeb = 0;
let votosJs = 0;
let votosBd = 0;

// crear contador total //
let totalVotos = 0;

// Función para votar por Diseño Web //
function votarWeb() {
  votosWeb++;
  totalVotos++;
  document.getElementById("votos-web").textContent = votosWeb;
  alert("¡Gracias por tu voto!");
  if (totalVotos % 5 === 0) {
    console.log("Total de votos: " + totalVotos);
  }
}

// Función para votar por JavaScript ///
function votarJs() {
  votosJs++;
  totalVotos++;
  document.getElementById("votos-js").textContent = votosJs;
  alert("¡Gracias por tu voto!");
  if (totalVotos % 5 === 0) {
    console.log("Total de votos: " + totalVotos);
  }
}

// Función para votar por Bases de Datos ///
function votarBd() {
  votosBd++;
  totalVotos++;
  document.getElementById("votos-bd").textContent = votosBd;
  alert("¡Gracias por tu voto!");
  if (totalVotos % 5 === 0) {
    console.log("Total de votos: " + totalVotos);
  }
}


// •Implementa un console.log() que muestre el total acumulado de votos cada 5 votos - investigar mas este punto
//