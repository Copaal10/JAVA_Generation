


let totalItems = 0; // productos que se vayan agregando
let totalPrecio = 0; // suma total
let productosAgregados = []; // guarda nombres de productos


// funcion agregar producto

function agregarProducto(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosAgregados.push(nombre);

  // Actualizar en pantalla
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;

  // Mostrar alerta si el total supera $50
  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  // Mostrar en consola los productos agregados
  console.log("Productos en el carrito:", productosAgregados);
}



// crerar funcion de vaciado de carrit

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  productosAgregados = [];

  // Actualizar en pantalla
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;

  alert("Carrito vaciado");
}