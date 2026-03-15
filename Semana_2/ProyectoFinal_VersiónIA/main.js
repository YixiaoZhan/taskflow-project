let tareasGuardadas = [];

const boton = document.getElementById("boton");
const buscador = document.getElementById("buscador");
const creador = document.getElementById("creador");
const tipo = document.getElementById("tipo");
const tareas = document.getElementById("tareas");

const estadisticas = document.getElementById("estadisticas");
const chatHead = document.getElementById("chathead");

const filtros = document.getElementById("filtros");
const completados = document.getElementById("completado");
const skilling = document.getElementById("skilling");
const bossing = document.getElementById("bossing");
const otro = document.getElementById("otro");

const botonTodo = document.getElementById("botonTodo");
const completarTodo = document.getElementById("completarTodo");
const borrarTodo = document.getElementById("borrarTodo");
const limpiarTodo = document.getElementById("limpiarTodo");

const tareasTotales = document.getElementById("tareasTotales");
const tareasPendientes = document.getElementById("tareasPendientes");
const tareasCompletas = document.getElementById("tareasCompletas");
const tareasSkilling = document.getElementById("tareasSkilling");
const tareasBossing = document.getElementById("tareasBossing");
const otrasTareas = document.getElementById("otrasTareas");
  

//actualizar localstorage
const actualizarLocal = () => {
  localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
}

//borrar valores del formulario
const borrarFormulario = () => {
    creador.value = "";
}


//Codigo generado por IA

//Funcion para obtener el icono segun la categoria
const getTaskIconSrc = (categoria) => {
  const mapping = {
    skilling: "recursos/Stats_icon.png",
    bossing: "recursos/Multicombat.png",
    otro: "recursos/Dungeon_icon.png",
    completado: "recursos/Distraction_map_icon.png",
    default: "recursos/Distraction_map_icon.png"
  };
  return mapping[categoria] || mapping.default;
};


//funcion para construir el div de la tarea
const buildTaskCard = (tarea) => {
  if (!tarea.createdAt) tarea.createdAt = Date.now();

  const div = document.createElement("div");
  div.className = `tarea flex ... rounded-2xl border ... ${tarea.categoria}`;

  const p = document.createElement("p");
  p.textContent = tarea.valor;
  p.dataset.valor = tarea.valor;
  p.className = "flex-1 ...";
  if (tarea.categoria === "completado") p.classList.add("line-through");

  const createdAtText = document.createElement("small");
  createdAtText.textContent = `Creada: ${new Date(tarea.createdAt).toLocaleString()}`;
  createdAtText.className = "text-xs text-gray-400 dark:text-gray-300 ml-2";

  const estadoWrapper = document.createElement("div");
  estadoWrapper.className = "flex flex-col";
  estadoWrapper.append(p, createdAtText);

  const img = new Image(20, 20);
  img.src = getTaskIconSrc(tarea.categoria);

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "✕";
  btnDelete.className = "borrar ...";
  btnDelete.style.margin = "0.125rem";

  div.append(img, estadoWrapper, btnDelete);
  if (tarea.categoria !== "completado") {
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "🖉";
    btnEdit.className = "editar ...";
    btnEdit.style.margin = "0.125rem";

    const btnComplete = document.createElement("button");
    btnComplete.textContent = "✓";
    btnComplete.className = "completar ...";
    btnComplete.style.margin = "0.125rem";

    div.append(btnEdit, btnComplete);
  }

  return {div, p, img, btnDelete, btnEdit: div.querySelector(".editar"), btnComplete: div.querySelector(".completar")};
};

//funcion para añadir eventlistener a los botones de cada tarea
const createTaskElement = (tarea) => {
  const {div, p, img, btnDelete, btnEdit, btnComplete} = buildTaskCard(tarea);

  btnDelete.addEventListener("click", () => {
    tareasGuardadas = tareasGuardadas.filter(t => t.valor !== tarea.valor);
    actualizarLocal();
    div.remove();
    mostrarInformacion();
    actualizarEstadisticas();
  });

  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      const nuevoValor = prompt("¿Cómo se llamará la tarea?").trim();
      if (!nuevoValor) return alert("No puede estar vacío");
      if (tareasGuardadas.some(t => t.valor.toLowerCase() === nuevoValor.toLowerCase() && t !== tarea))
        return alert("No puede haber tareas repetidas");
      tarea.valor = nuevoValor;
      p.textContent = nuevoValor;
      p.dataset.valor = nuevoValor;
      actualizarLocal();
      actualizarEstadisticas();
    });
  }

  if (btnComplete) {
    btnComplete.addEventListener("click", () => {
      tarea.categoria = "completado";
      p.classList.add("line-through");
      div.classList.remove("skilling","bossing","otro");
      div.classList.add("completado");
      img.src = getTaskIconSrc("completado") + "?t=" + Date.now();
      btnEdit.remove();
      btnComplete.remove();
      actualizarLocal();
      actualizarEstadisticas();
    });
  }

  p.addEventListener("dblclick", () => {
    if (tarea.categoria === "completado") return;
    const nuevoValor = prompt("¿Cómo se llamará la tarea?").trim();
    if (!nuevoValor) return alert("No puede estar vacío");
    if (tareasGuardadas.some(t => t.valor.toLowerCase() === nuevoValor.toLowerCase() && t !== tarea))
      return alert("No puede haber tareas repetidas");
    tarea.valor = nuevoValor;
    p.textContent = nuevoValor;
    p.dataset.valor = nuevoValor;
    actualizarLocal();
    actualizarEstadisticas();
  });

  tareas.appendChild(div);
  if (filtroActual && !div.classList.contains(filtroActual)) div.classList.add("hidden");
};
//Fin codigo generado por IA


//funcion para crear tareas -- Codigo modificado por IA
const crearTarea = (tarea) => {
  const {div, p, img, btnDelete, btnEdit, btnComplete} = buildTaskCard(tarea);

  btnDelete.addEventListener("click", () => {
    tareasGuardadas = tareasGuardadas.filter(t => t.valor !== tarea.valor);
    actualizarLocal();
    div.remove();
    mostrarInformacion();
    actualizarEstadisticas();
  });

  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      const nuevoValor = prompt("¿Cómo se llamará la tarea?").trim();
      if (!nuevoValor) return alert("No puede estar vacío");
      if (tareasGuardadas.some(t => t.valor.toLowerCase() === nuevoValor.toLowerCase() && t !== tarea))
        return alert("No puede haber tareas repetidas");
      tarea.valor = nuevoValor;
      p.textContent = nuevoValor;
      p.dataset.valor = nuevoValor;
      actualizarLocal();
      actualizarEstadisticas();
    });
  }

  if (btnComplete) {
    btnComplete.addEventListener("click", () => {
      tarea.categoria = "completado";
      p.classList.add("line-through");
      div.classList.remove("skilling","bossing","otro");
      div.classList.add("completado");
      img.src = getTaskIconSrc("completado") + "?t=" + Date.now();
      btnEdit.remove();
      btnComplete.remove();
      actualizarLocal();
      actualizarEstadisticas();
    });
  }

  p.addEventListener("dblclick", () => {
    if (tarea.categoria === "completado") return;
    const nuevoValor = prompt("¿Cómo se llamará la tarea?").trim();
    if (!nuevoValor) return alert("No puede estar vacío");
    if (tareasGuardadas.some(t => t.valor.toLowerCase() === nuevoValor.toLowerCase() && t !== tarea))
      return alert("No puede haber tareas repetidas");
    tarea.valor = nuevoValor;
    p.textContent = nuevoValor;
    p.dataset.valor = nuevoValor;
    actualizarLocal();
    actualizarEstadisticas();
  });

  tareas.appendChild(div);
  if (filtroActual && !div.classList.contains(filtroActual)) div.classList.add("hidden");
}

//Marcar todo como completado -- Codigo modificado por IA
const todoCompletado = () => {
  if (!tareasGuardadas.length) return;
  tareasGuardadas = tareasGuardadas.map(t => ({ ...t, categoria: "completado" }));

  const tarjetas = tareas.querySelectorAll(".tarea");
  tarjetas.forEach(div => {
    const p = div.querySelector("p");
    p.classList.add("completado", "line-through");
    div.classList.remove("skilling","bossing","otro");
    div.classList.add("completado");

    const img = div.querySelector("img");
    if (img) img.src = getTaskIconSrc("completado") + "?t=" + Date.now();

    const editarBtn = div.querySelector(".editar");
    const completarBtn = div.querySelector(".completar");
    if (editarBtn) editarBtn.remove();
    if (completarBtn) completarBtn.remove();
  });

  actualizarLocal();
  actualizarEstadisticas();
};

completarTodo.addEventListener("click", () =>{
  todoCompletado();
  actualizarEstadisticas();
})

//borrar todo completado -- Codigo modificado por IA
const borrarCompletado = () => {
  const completadas = tareas.querySelectorAll(".tarea.completado");
  if (!completadas.length) return;

  completadas.forEach(div => div.remove());
  tareasGuardadas = tareasGuardadas.filter(t => t.categoria !== "completado");

  actualizarLocal();
  mostrarInformacion();
  actualizarEstadisticas();
}

borrarTodo.addEventListener("click", () =>{
  borrarCompletado();
})

//boton limpiar todo (nueva funcionalidad)
const limpiarTodasLasTareas = () => {
  if (!tareasGuardadas.length) return;
  const confirmacion = confirm("¿Seguro que deseas borrar todas las tareas? Esta acción no se puede deshacer.");
  if (!confirmacion) return;
  tareasGuardadas = [];
  tareas.innerHTML = "";
  actualizarLocal();
  mostrarInformacion();
  actualizarEstadisticas();
};

limpiarTodo.addEventListener("click", () => {
  limpiarTodasLasTareas();
});

//funcion para buscar tarea
const buscarTarea = () => {
  const q = normalizarTexto(buscador.value);
  document.querySelectorAll(".tarea").forEach(div => {
    const p = div.querySelector("p");
    div.classList.toggle("hidden", !matchesSearch(p.textContent, q));
  });
};

const debounce = (fn, ms = 150) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
};

buscador.addEventListener("input", debounce(buscarTarea, 150));

creador.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    boton.click();
  }
});

//filtrar por categoria
let filtroActual = null;
const botones = [completados, skilling, bossing, otro];

const filtrarTareas = (categoria) => {
  const tarea = tareas.querySelectorAll("div");
  tarea.forEach(valor => {
    if (categoria === null || valor.classList.contains(categoria)) {
      valor.classList.remove("hidden");
    } else {
      valor.classList.add("hidden");
    }
  });
}

const activarBoton = (boton, categoria) => {
  filtroActual = filtroActual === categoria ? null : categoria;
  botones.forEach(b => b.classList.remove("scale-110", "bg-[#C0A786]"));
  if (filtroActual) {
    boton.classList.add("scale-110", "bg-[#C0A786]");
  }
  filtrarTareas(filtroActual);
}

completados.addEventListener("click", () =>{
  activarBoton(completados, "completado");
})

skilling.addEventListener("click", () =>{
  activarBoton(skilling, "skilling");
})

bossing.addEventListener("click", () =>{
  activarBoton(bossing, "bossing");
})

otro.addEventListener("click", () =>{
  activarBoton(otro, "otro");
})

//Crear tarea
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    
    const tareaTemporal = {categoria: tipo.value, valor: creador.value, createdAt: Date.now()};

    //comprobar que no sea repetido o vacio
    if (tareaTemporal.valor === "") {
    borrarFormulario();
    return alert("La tarea no puede estar vacío");
    } else if(tareasGuardadas.some((value) => value.valor.toLowerCase() === tareaTemporal.valor.toLowerCase())){
    borrarFormulario();
    return alert("No puede haber tareas repetidas"); 
    }


    tareasGuardadas.push(tareaTemporal);
    crearTarea(tareaTemporal);
    actualizarLocal();
    borrarFormulario();
    mostrarInformacion();
    actualizarEstadisticas();
})

//Funcion para mostrar informacion, si no hay tarea muestra la imagen
const mostrarInformacion = () => {
  if (!tareasGuardadas.length){
    estadisticas.classList.add("hidden");
    filtros.classList.add("hidden");
    botonTodo.classList.add("hidden");
    chatHead.classList.remove("hidden");
  }else{
    estadisticas.classList.remove("hidden");
    filtros.classList.remove("hidden");
    botonTodo.classList.remove("hidden");
    chatHead.classList.add("hidden");
  }
}

//Recuperar tareas al recargar la pagina
window.addEventListener("load", () => {
  tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareasGuardadas.forEach(tarea => crearTarea(tarea));
  mostrarInformacion();
  actualizarEstadisticas();
})

//Modo oscuro
const tema = document.getElementById("tema");
tema.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
})

//estadisticas -- Codigo generado por IA
const getStats = () => {
  const acc = tareasGuardadas.reduce(
    (accumulator, tarea) => {
      accumulator.total += 1;
      if (tarea.categoria === "completado") accumulator.completado += 1;
      if (tarea.categoria === "skilling") accumulator.skilling += 1;
      if (tarea.categoria === "bossing") accumulator.bossing += 1;
      if (tarea.categoria === "otro") accumulator.otro += 1;
      return accumulator;
    },
    { total: 0, completado: 0, skilling: 0, bossing: 0, otro: 0 }
  );
  acc.pendientes = Math.max(0, acc.total - acc.completado);
  return acc;
};

//funcion para actualizar las estadisticas --codigo generado por IA
const actualizarEstadisticas = () => {
  const s = getStats();
  tareasTotales.textContent = s.total;
  tareasCompletas.textContent = s.completado;
  tareasPendientes.textContent = s.pendientes;
  tareasSkilling.textContent = s.skilling;
  tareasBossing.textContent = s.bossing;
  otrasTareas.textContent = s.otro;
  felicitar(s);
};


//funcion para mostrar mensaje de felicitacion si todas las tareas estan completadas --codigo generado por IA
const felicitar = ({ total, completado }) => {
  const textoFelicitacion = document.getElementById("textoFelicitacion");
  const baile = document.getElementById("baile");
  const estaFelicitado = total > 0 && total === completado;
  textoFelicitacion.classList.toggle("hidden", !estaFelicitado);
  baile.classList.toggle("hidden", !estaFelicitado);
};


//codigo generado por IA
const normalizarTexto = (texto) => texto.trim().toLowerCase();

const matchesSearch = (tareaTexto, filtro) =>
  normalizarTexto(tareaTexto).includes(normalizarTexto(filtro));
//fin de codigo generado por IA


