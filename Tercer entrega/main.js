const alumnos = [];

class Alumno {
    constructor(nombre, apellido){
        this.id = alumnos.length + 1;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arreglo = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;
    //console.log(inputs[0].value);
    //console.log(inputs[1].value);
    //console.log(inputs[2].value);

if (!inputs[2].value.includes("@")){
    inputs[2].value = "";
    alert("Debe contener el @")
}

if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != ""){
    arreglo.push({nombre: inputs[0].value, apellido: inputs[1].value, email: inputs[2].value });
    console.log(arreglo);
}
});




/*for (let i = 0; i < 3; i++){
let nombre = prompt("Ingrese nombre del alumno")
let apellido = prompt("Ingrese apellido del alumno")

let alumno  = new Alumno(nombre, apellido);
alumnos.push(alumno)
}
console.log(alumnos);*/


const ingresados = [
{ id: 1, nombre: "Jose", apellido: "Alvarez" },
{ id: 2, nombre: "Nicolas", apellido:"Gimenez" },
{ id: 3, nombre: "Maximiliano" , apellido: "Rodriguez"},
{ id: 4, nombre: "Lautaro" , apellido: "Lopez"}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaDeAlumnos", JSON.stringify(ingresados));
console.log(ingresados);