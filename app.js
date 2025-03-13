// Seleccionamos los elementos del DOM
const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

// Función para agregar una tarea
function agregarTarea() {
  if (input.value) {
    // Crear el contenedor de la tarea (div.tarea)
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    // Aplicar estilos al contenedor div.tarea con JS
    tareaNueva.style.backgroundColor = '#407ba6'; // Fondo azul
    tareaNueva.style.color = 'white'; // Texto blanco
    tareaNueva.style.padding = '10px'; // Espaciado interno
    tareaNueva.style.display = 'flex'; // Usar flexbox
    tareaNueva.style.justifyContent = 'space-between'; // Alinear elementos
    tareaNueva.style.alignItems = 'center'; // Centrar verticalmente
    tareaNueva.style.margin = '10px 0'; // Margen entre tareas
    tareaNueva.style.borderRadius = '10px'; // Bordes redondeados
    tareaNueva.style.transition = 'background-color 0.3s ease';

    // Crear el párrafo para el texto de la tarea: Texto ingresado por el usuario
    let texto = document.createElement("p");
    texto.innerText = input.value;

    // Aplicar estilos al párrafo usando JavaScript
    texto.style.fontSize = '1.25rem';
    texto.style.margin = '0';

    // Agregar el párrafo al contenedor de la tarea: div.tarea
    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');

    // Aplicar estilos al contenedor .iconos
    iconos.style.display = 'flex';
    iconos.style.gap = '10px';
    //Agrega espaciado entre iconos
    tareaNueva.appendChild(iconos);

    // Icono de completar 
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    
    //Agrega estilos para el icono de completar
    completar.style.fontSize = '1.25rem';
    completar.style.color = '#28a745';
    completar.style.cursor = 'pointer';
    completar.style.transition = 'transform 0.2s ease';
    completar.style.transform = 'scale(1.2)';
    completar.addEventListener('mouseover', () => {
      completar.style.transform = 'scale(1.2)';
  });
   completar.addEventListener('mouseout', () => {
      completar.style.transform = 'scale(1)';
  });
  completar.addEventListener('click', completarTarea); // Agregar evento

  // Icono de eliminar
    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    
    //Estilos para el icono de eliminar
    eliminar.style.color = '#dc3545';
    eliminar.style.fontSize = '20px';
    eliminar.style.cursor = 'pointer';
    eliminar.style.transition = 'transform 0.2s ease';
    eliminar.style.transform = 'scale(1.2)';
    eliminar.addEventListener('mouseover', () => {
      eliminar.style.transform = 'scale(1.2)';
  });
  eliminar.addEventListener('mouseout', () => {
      eliminar.style.transform = 'scale(1)';
  });
    eliminar.addEventListener('click', eliminarTarea); // Agregar evento

    iconos.append(completar, eliminar);

    // Agregar tarea a la lista de tareas
    listaDeTareas.appendChild(tareaNueva);

    // Limpiar el campo de entrada
    input.value = '';
  } else {
    alert("Por favor ingresa una tarea.");
  }
}

// Marcar una tarea como completada
function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;

  // Alternar la clase 'completada'
  tarea.classList.toggle('completada');

  // Aplicar estilos dinámicamente basados en la clase
  if (tarea.classList.contains('completada')) {
    // Estilos cuando la tarea está completada
    tarea.style.backgroundColor = '#d4edda'; // Fondo verde claro
    tarea.style.textDecoration = 'line-through'; // Tachado
    tarea.style.color = '#155724'; // Color de texto verde oscuro
    tarea.style.border = '1px solid #c3e6cb'; // Borde verde
  } else {
    // Restaurar estilos originales (tarea no completada)
    tarea.style.backgroundColor = '#407ba6'; // Fondo azul
    tarea.style.textDecoration = 'none'; // Sin tachado
    tarea.style.color = 'white'; // Color de texto blanco
    tarea.style.border = 'none'; // Sin borde
  }
}

// Eliminar una tarea del DOM
function eliminarTarea(e) {
  if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}
}

// Agregar evento al botón para agregar tareas
boton.addEventListener('click', agregarTarea);

// Agregar evento al campo de entrada para agregar tareas con la tecla Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea(); // Llama a la misma función que el botón
  }
});