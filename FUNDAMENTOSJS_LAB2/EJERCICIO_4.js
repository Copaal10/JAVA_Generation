// ✅ Definimos las 3 notas como variables
let nota1 = 3.5;
let nota2 = 4.0;
let nota3 = 2.8;

// ✅ Creamos un array con las notas
let notas = [nota1, nota2, nota3];

// ✅ Calculamos la suma con un bucle
let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma = suma + notas[i];
}

// ✅ Calculamos el promedio
let promedio = suma / notas.length;

// ✅ Mostramos el resultado
console.log("El promedio de las notas es:", promedio);