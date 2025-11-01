// Paso 1: Constructor ListaCompras
function ListaCompras() {
  this.productos = []; // Lista vacía al inicio
}

// Paso 2: Método agregar
ListaCompras.prototype.agregar = function(producto) {
  this.productos.push(producto); // Añade el producto al array
};

// Paso 3: Método mostrar
ListaCompras.prototype.mostrar = function() {
  for (let i = 0; i < this.productos.length; i++) {
    console.log((i + 1) + ". " + this.productos[i]); // Muestra numerado
  }
};

// Paso 4: Crear la lista y probar
let miLista = new ListaCompras();

miLista.agregar("Manzanas");
miLista.agregar("Pan");
miLista.agregar("Leche");

miLista.mostrar();