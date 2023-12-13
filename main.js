//* PRIMER PRE-ENTREGA Calculador de promedio
let nombre = prompt ("Ingrese su nombre").toLowerCase();
let categoria = prompt("Ingrese si es estudiante o profesor").toLowerCase();


while (categoria != "estudiante"){
    alert(`Hola ${nombre} esta seccion no es para profesores`);

    let categoria = prompt("Ingrese si es estudiante o profesor");
}

alert(`Hola ${nombre} ahora vamos a sacar el promedio de la materia que cursas`);
let materia = prompt("Ingrese que materia cursa");

function promedioParciales(){

    let primerParcial = Number(prompt("Ingrese resultado de su primer parcial"));
    let segundoParcial = Number(prompt("Ingrese resultado de su segundo parcial"));

    const promedio = (primerParcial + segundoParcial) / 2;
    alert(`El promedio es ${promedio} `);
    let resultado = promedio

    if(resultado >=7 || resultado === 10){
        alert(`Excelente promocionaste ${materia}`);
    }else if(resultado >= 4){
        alert(`Llevaste la materia ${materia} a final`);
    } else if (resultado <= 3){
        alert(`Lamentablemente recursaste la materia`);
    }else{
        alert(`Ingrese valores adecuados`);
    }


}
promedioParciales();