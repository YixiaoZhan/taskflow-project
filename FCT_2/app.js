let tareasGuardadas = [];
let tareaActual;

const boton = document.getElementById("boton");
const buscador = document.getElementById("buscador");
const creador = document.getElementById("creador");
const tareas = document.getElementById("tareas");

const borrarFormulario = () => {
    creador.value = "";
}

const crearTarea = (tareaActual, tareas) => {
    const div = document.createElement("div");
    div.classList.add("tarea");

    const p = document.createElement("p");
    p.textContent = tareaActual + "\u00A0";
    
    const button = document.createElement("button");
    button.textContent = "Borrar";
    button.classList.add("borrar");
    button.addEventListener('click', () => {
    div.remove();
    });

    div.append(p, button);
    tareas.append(div);
}

const buscarTarea = () => {
    const valorBuscador = buscador.value;
    console.log(valorBuscador);
    document.querySelectorAll(".tarea").forEach(div => {
    const p = div.querySelector("p");
    const tarea = p.textContent.toLowerCase();

    if (tarea.includes(valorBuscador)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  })
}

boton.addEventListener("click", (e) =>{
    e.preventDefault();
    tareaActual = creador.value.trim();

    if (tareaActual === "") {
    borrarFormulario();
    return alert("La tarea no puede estar vacío");
    } else if(tareasGuardadas.some((value) => value.toLowerCase() === tareaActual.toLowerCase())){
    borrarFormulario();
    return alert("No puede haber tareas repetidas"); 
    }

    tareasGuardadas.push(tareaActual);
    crearTarea(tareaActual, tareas);
    borrarFormulario();
})

buscador.addEventListener("input", (buscarTarea));



