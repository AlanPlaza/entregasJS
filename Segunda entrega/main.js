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
{ id: 4, nombre: "Lautaro" , apellido: "Lopez"}]

let buscadorNombre = prompt("Ingrese nombre del alumno que busca")

if(buscadorNombre === ingresados){
    alert(`Alumno encontrado`)
}else{
    alert(`Alumno no encontrado`)
}
buscadorNombre = prompt("Ingrese nombre del alumno que busca")

//const buscado = ingresados.find(nombre => nombre.id === 3)
console.log(ingresados) 





