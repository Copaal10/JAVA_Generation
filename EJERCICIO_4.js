// Crear el objeto carrito
function Carrito() {
  this.productos = [];
  this.total = 0;
}

// Método para agregar productos
Carrito.prototype.agregarProducto = function(nombre, precio) {
  this.productos.push(nombre);
  this.total += precio;
};

// Método para calcular descuento
Carrito.prototype.calcularDescuento = function() {
  if (this.total > 100) {
    let descuento = this.total * 0.10;
    console.log("Total: $" + this.total);
    console.log("Descuento 10%: $" + descuento);
    console.log("Total con descuento: $" + (this.total - descuento));
  } else if (this.total > 50) {
    let descuento = this.total * 0.05;
    console.log("Total: $" + this.total);
    console.log("Descuento 5%: $" + descuento);
    console.log("Total con descuento: $" + (this.total - descuento));
  } else {
    console.log("Total: $" + this.total);
    console.log("No hay descuento.");
  }
};

// USO DEL CÓDIGO: crear carrito y agregar productos
let miCarrito = new Carrito();

miCarrito.agregarProducto("Camisa", 30);
miCarrito.agregarProducto("Pantalón", 40);
miCarrito.agregarProducto("Zapatos", 50);

// Calcular descuento
miCarrito.calcularDescuento();