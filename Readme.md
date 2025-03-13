Esta aplicación fue desarrollada como un ejercicio práctico para fortalecer habilidades en la manipulación del DOM y el uso de JavaScript. Su propósito es demostrar de manera clara cómo interactuar con el DOM, gestionar eventos y aplicar estilos dinámicos utilizando únicamente JavaScript. Aunque el objetivo principal es practicar la aplicación de estilos directamente desde JavaScript, es importante destacar que este enfoque no siempre es el más recomendado en proyectos reales.

Si bien es posible aplicar estilos directamente en JavaScript, se recomienda utilizar CSS para definir los estilos siempre que sea posible. Esta práctica no solo mejora la mantenibilidad del código, sino que también promueve una separación de responsabilidades más clara: HTML para la estructura, CSS para los estilos y JavaScript para la lógica. Sin embargo, el uso de estilos dinámicos en JavaScript es especialmente útil en situaciones donde los estilos deben aplicarse de manera condicional o basados en interacciones del usuario.

Además, la aplicación es completamente responsiva, lo que significa que se adapta a diferentes tamaños de pantalla. Esto permite probarla en un navegador y redimensionar la ventana para observar su comportamiento en dispositivos móviles, tablets y escritorio. Para lograr esta adaptabilidad, se utilizan unidades relativas como rem y %, que garantizan que los elementos escalen correctamente en distintos dispositivos.

A continuación, se presenta una explicación detallada de cada parte del código JavaScript, con el fin de comprender su creación, funcionamiento y propósito dentro de la aplicación.
---

### **1. Selección de elementos del DOM**
```javascript
const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");
```
- **`input`**: Selecciona el campo de entrada (`<input>`) donde el usuario ingresa la tarea.
- **`boton`**: Selecciona el botón (`<button>`) que se usa para agregar la tarea.
- **`listaDeTareas`**: Selecciona el contenedor (`<div>`) donde se mostrarán las tareas agregadas.

Estas variables permiten interactuar con los elementos HTML desde JavaScript.

---

### **2. Función `agregarTarea`**
Esta función se encarga de agregar una nueva tarea a la lista cuando el usuario ingresa texto y hace clic en el botón o presiona Enter.
Su propósito es tomar el texto ingresado por el usuario en el campo de entrada, crear una nueva tarea con ese texto y agregarla al DOM (la lista de tareas visible en la página). Además, asigna funcionalidades a los iconos de "completar" y "eliminar" para que el usuario pueda interactuar con las tareas.

#### **Validación de entrada**
```javascript
if (input.value) {
```
- Verificación del valor del campo de entrada
if (input.value) 
 
 Propósito: Verifica si el campo de entrada (input) tiene un valor.
input.value :Obtiene el texto que el usuario ha escrito en el campo de entrada.

Si el campo está vacío (es decir, input.value es una cadena vacía), la condición será falsa y se ejecutará el bloque else.


#### **Creación del contenedor de la tarea**
```javascript
let tareaNueva = document.createElement("div");
tareaNueva.classList.add("tarea");
```
- Propósito: Crea un nuevo contenedor para la tarea.
Detalle:
document.createElement("div") crea un nuevo elemento div en el DOM.
- classList.add("tarea") añade la clase `tarea` al `div` recién creado. 

#### **Aplicación de estilos dinámicos a la clase tarea **
```javascript
tareaNueva.style.backgroundColor = '#407ba6';
tareaNueva.style.color = 'white';
tareaNueva.style.padding = '10px';
tareaNueva.style.display = 'flex';
tareaNueva.style.justifyContent = 'space-between';
tareaNueva.style.alignItems = 'center';
tareaNueva.style.margin = '10px 0';
tareaNueva.style.borderRadius = '10px';
tareaNueva.style.transition = 'background-color 0.3s ease';
```
- Aplica estilos directamente al contenedor de la tarea usando JavaScript:
  - Fondo azul (`#407ba6`), texto blanco, espaciado interno (`padding`), y bordes redondeados.
  - Usa Flexbox para alinear los elementos dentro del contenedor.

#### **Creación del texto de la tarea**
```javascript
let texto = document.createElement("p");
texto.innerText = input.value;
texto.style.fontSize = '20px';
tareaNueva.appendChild(texto);
```
- Crea un elemento `<p>`(párrafo) para mostrar el texto de la tarea y lo agrega al contenedor de la tarea `div`.
- Aplica un tamaño de fuente de `20px`.
- Agrega el párrafo al contenedor, `div` de la tarea.

- texto.innerText = input.value asigna el texto ingresado por el usuario al contenido del párrafo.

- tareaNueva.appendChild(texto) agrega el párrafo al contenedor de la tarea (div.tarea).

#### **Creación del contenedor de iconos**
```javascript
let iconos = document.createElement('div');
iconos.classList.add('iconos');
iconos.style.display = 'flex';
iconos.style.gap = '10px';
tareaNueva.appendChild(iconos);
```
- Crea un contenedor (`<div>`) para los iconos de "completar" y "eliminar".
- Se crea la clase `iconos`
- Aplica estilos para usar Flexbox y un espacio (`gap`) entre los iconos.

#### **Creación del icono "completar"**
```javascript
let completar = document.createElement("i");
completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
completar.style.fontSize = '20px';
completar.style.color = '#28a745';
completar.style.cursor = 'pointer';
completar.style.transition = 'transform 0.2s ease';
completar.addEventListener('mouseover', () => {
  completar.style.transform = 'scale(1.2)';
});
completar.addEventListener('mouseout', () => {
  completar.style.transform = 'scale(1)';
});
completar.addEventListener('click', completarTarea);
```
- Crea un ícono de "completar" usando la clase `bi-check-circle-fill` de Bootstrap Icons.
- Aplica estilos: tamaño, color verde, cursor de puntero, y una animación de escala al pasar el mouse.
- Asigna un evento `click` para marcar la tarea como completada.

#### **Creación del icono "eliminar"**
```javascript
let eliminar = document.createElement("i");
eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
eliminar.style.color = '#dc3545';
eliminar.style.fontSize = '20px';
eliminar.style.cursor = 'pointer';
eliminar.style.transition = 'transform 0.2s ease';
eliminar.addEventListener('mouseover', () => {
  eliminar.style.transform = 'scale(1.2)';
});
eliminar.addEventListener('mouseout', () => {
  eliminar.style.transform = 'scale(1)';
});
eliminar.addEventListener('click', eliminarTarea);
```
- Crea un ícono de "eliminar" usando la clase `bi-trash3-fill` de Bootstrap Icons.
- Aplica estilos: tamaño, color rojo, cursor de puntero, y una animación de escala al pasar el mouse.
- Asigna un evento `click` para eliminar la tarea.

#### **Agregar la tarea a la lista, agregar al DOM**
```javascript
listaDeTareas.appendChild(tareaNueva);
input.value = '';
```
- Agrega la tarea al contenedor `lista-de-tareas`.
- Limpia el campo de entrada (`input`) después de agregar la tarea.

#### **Manejo de errores**
```javascript
} else {
  alert("Por favor ingresa una tarea.");
}
```
- Muestra una alerta si el campo de entrada está vacío.

---

### **3. Función `completarTarea`**
Esta función marca una tarea como completada o la desmarca.

#### **Alternar clase y estilos**
```javascript
let tarea = e.target.parentNode.parentNode;
tarea.classList.toggle('completada');
```
- Obtiene el contenedor de la tarea (`div.tarea`) desde el ícono que se hizo clic.
- Alterna la clase `completada` en el contenedor.

**Funcionamiento**:
- `e.target` hace referencia al icono en el que se hizo clic.
- `parentNode.parentNode` sube dos niveles en el DOM para seleccionar el contenedor de la tarea (`div.tarea`).
- `classList.toggle('completada')` agrega o quita la clase `completada`, lo que cambia el estilo de la tarea.

#### **Aplicación de estilos dinámicos**
```javascript
if (tarea.classList.contains('completada')) {
  tarea.style.backgroundColor = '#d4edda';
  tarea.style.textDecoration = 'line-through';
  tarea.style.color = '#155724';
  tarea.style.border = '1px solid #c3e6cb';
} else {
  tarea.style.backgroundColor = '#407ba6';
  tarea.style.textDecoration = 'none';
  tarea.style.color = 'white';
  tarea.style.border = 'none';
}
```
- Si la tarea está completada, aplica estilos de fondo verde claro, texto tachado y borde verde.
- Si no está completada, restaura los estilos originales.

---

### **4. Función `eliminarTarea`**
Esta función elimina una tarea de la lista.

#### **Confirmación y eliminación**
```javascript
if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}
```
- Muestra un cuadro de diálogo de confirmación.
- Si el usuario confirma, elimina la tarea del DOM.

- **Funcionamiento**:
- `e.target` hace referencia al icono en el que se hizo clic.
- `parentNode.parentNode` selecciona el contenedor de la tarea (`div.tarea`).
  - `remove()` elimina el elemento del DOM.
---

### **5. Eventos 'Event Listeners'**
#### **Evento `click` en el botón**
```javascript
boton.addEventListener('click', agregarTarea);
```
- Llama a la función `agregarTarea` cuando se hace clic en el botón.

#### **Evento `keydown` en el campo de entrada**
```javascript
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});
```
- Llama a la función `agregarTarea` cuando el usuario presiona la tecla `Enter`.

- **Funcionamiento**:
  1. **Botón**:
     - Cuando el usuario hace clic en el botón, se ejecuta la función `agregarTarea`.
  2. **Campo de entrada**:
     - Cuando el usuario presiona una tecla en el campo de entrada, se verifica si la tecla es `Enter`.
     - Si es `Enter`, se ejecuta la función `agregarTarea`.

---

### **Resumen del flujo del programa**

1. Verifica si el campo de entrada tiene un valor.
2. Si tiene un valor:
   - Crea un contenedor para la tarea.
   - Crea un párrafo con el texto ingresado por el usuario y lo agrega al contenedor.
   - Crea un contenedor para los iconos y lo agrega al contenedor de la tarea.
   - Crea los iconos de "completar" y "eliminar", les asigna eventos y los agrega al contenedor de iconos.
   - Agrega la tarea completa a la lista de tareas en el DOM.
3. Si el campo de entrada está vacío, muestra una alerta al usuario.
4. Eliminar tareas con confirmación.
5. Manejar eventos de clic y teclado para una mejor experiencia de usuario.

---



 

