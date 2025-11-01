





function buscarProducto(nombre, inventario) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      return true;
    }
  }
  return false;
}

const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 }
];

console.log(buscarProducto("bolso", inventario));