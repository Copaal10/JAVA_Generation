
let usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 15 },
  { nombre: "Sofía", edad: 22 }
];



let edadMinima = 18;

let usuariosFiltrados = [];
// aca vamos a guardar los usuarios filtrados


// Recorr la lista y comparamos edades
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].edad >= edadMinima) {
    usuariosFiltrados.push(usuarios[i]);
  }
}


console.log("Usuarios con edad mayor o igual a", edadMinima, ":");
for (let i = 0; i < usuariosFiltrados.length; i++) {
  console.log("- " + usuariosFiltrados[i].nombre + " (" + usuariosFiltrados[i].edad + " años)");
}
