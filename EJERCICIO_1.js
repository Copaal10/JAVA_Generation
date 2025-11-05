

//funcion libro, define una funcion (entre parentesis van los valores que usa)

// this guarda el titulo del libro del objeto que se esta creando

// this guarda el autor del lirbo

// This prestado agrega una propiedad false, 

function Libro( titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}

Libro.prototype.prestar = function(){
    if ( this.prestado === false){
        this.prestado = true;
        console.log("el libro fue prestado");
        } else {
            console.log(" error el libro esta prestado");
        }
};


let libro1 = new Libro("la divina comedia", "dante alligeri");

libro1.prestar();