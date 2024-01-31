const alumnos = [];

class Alumno {
    constructor(nombre, apellido){
        this.id = alumnos.length + 1;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let titulo = document.getElementById("titulo");
titulo.innerHTML = `<h4>ingrese sus datos para poder inscribirse</h4>`

const arreglo = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;

if (!inputs[2].value.includes("@")){
    inputs[2].value = "";
    alert("Debe contener el @")
}

if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != ""){
    arreglo.push({nombre: inputs[0].value, apellido: inputs[1].value, email: inputs[2].value });
    console.log(arreglo);
}
});


const ingresados = [
{ id: 1, nombre: "Jose", apellido: "Alvarez" },
{ id: 2, nombre: "Nicolas", apellido:"Gimenez" },
{ id: 3, nombre: "Maximiliano" , apellido: "Rodriguez"},
{ id: 4, nombre: "Lautaro" , apellido: "Lopez"}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const alumnosIngresados = JSON.parse(localStorage.getItem("ingresados"))

guardarLocal("listaDeAlumnos", JSON.stringify(ingresados));
console.log(ingresados);