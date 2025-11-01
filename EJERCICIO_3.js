// Constructor del Reproductor
function ReproductorMusica(cancion, artista) {
  this.cancion = cancion;
  this.artista = artista;
  this.sonando = false;
}

// Método para reproducir la canción
ReproductorMusica.prototype.reproducir = function() {
  if (this.sonando === false) {
    this.sonando = true;
    console.log("Reproduciendo: " + this.cancion + " de " + this.artista);
  } else {
    console.log("La canción ya está sonando.");
  }
};

// Crear una canción y probar
let tema1 = new ReproductorMusica("Bohemian Rhapsody", "Queen");

tema1.reproducir(); // Primera vez: se reproduce
tema1.reproducir(); // Segunda vez: muestra advertencia