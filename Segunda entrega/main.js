const alumnos = [];

class Alumno {
    constructor(nombre, apellido){
        this.id = alumnos.length + 1;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

for (let i = 0; i < 3; i++){
let nombre = prompt("Ingrese nombre del alumno")
let apellido = prompt("Ingrese apellido del alumno")

let alumno  = new Alumno(nombre, apellido);
alumnos.push(alumno)
}
console.log(alumnos);


const ingresados = [
{ id: 1, nombre: "Jose", apellido: "Alvarez" },
{ id: 2, nombre: "Nicolas", apellido:"Gimenez" },
{ id: 3, nombre: "Maximiliano" , apellido: "Rodriguez"},
{ id: 4, nombre: "Lautaro" , apellido: "Lopez"}];

let container = document.getElementById("contenedor")
container.innerHTML = `<h2>Nombre de alumnos</h2>`


for (const ingreso of ingresados) {
 let contenedor = document.createElement("div");
 //Definimos el innerHTML del elemento con una plantilla de texto

 contenedor.innerHTML = `
 <h3> Numero de alumno ${ingreso.id}</h3>
 <p> Nombre: ${ingreso.nombre}</p>
 <p> Apellido ${ingreso.apellido}</p>`;
 document.body.appendChild(contenedor);
}

let buscadorNombre = prompt("Ingrese nombre del alumno que busca")

if(buscadorNombre === ingresados){
    alert(`Alumno encontrado`)
}else{
    alert(`Alumno no encontrado`)
}
buscadorNombre = prompt("Ingrese nombre del alumno que busca")
// No pude generar el buscador de nombres no me estaria saliendo queria saber si me podria dar una ayuda de como lograrlo
console.log(ingresados) 





