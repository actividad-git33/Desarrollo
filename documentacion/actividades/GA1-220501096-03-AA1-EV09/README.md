# Lista de Tareas en React

Este proyecto lo desarrollé como parte de la **Actividad 09**. La idea era construir una aplicación sencilla de lista de tareas usando React, y que cada componente tuviera su propia responsabilidad.

## ¿Qué hace mi aplicación?

- Me permite agregar tareas desde un formulario.
- Valida que no se agreguen tareas vacías ni repetidas.
- Puedo marcar tareas como completadas haciendo clic en el texto (se tachan y cambian de color).
- También puedo eliminar tareas con un botón.
- Todo está acompañado de estilos que diferencian claramente las tareas pendientes de las completadas.

## Cómo está organizado el proyecto

Dentro de `src/components` tengo tres archivos principales:

- FormularioTarea.jsx : aquí controlo el input y el botón para agregar nuevas tareas.
- ListaTareas.jsx ; este componente se encarga de recorrer el array de tareas y mostrarlas.
- Tarea.jsx : representa cada tarea individual, con su texto y los botones de acción.

En el archivo **App.jsx** manejo el estado global con `useState` y paso las funciones necesarias como props a los demás componentes.

---

## Explicación de cada parte

App.jsx
Aquí tengo el estado `tareas` y las funciones principales:

- `agregarTarea`: crea un objeto con `id`, `texto` y `completada`.
- `eliminarTarea`: borra una tarea por su `id`.
- `completarTarea`: alterna el estado de completada.

### FormularioTarea.jsx

Uso un input controlado con `useState`. Cuando envío el formulario, llamo a `agregarTarea` y limpio el campo.

### ListaTareas.jsx

Recorro el array de tareas con `.map()` y renderizo cada una usando el componente `Tarea`.

### Tarea.jsx

Muestro el texto de la tarea y el botón eliminar. Si hago clic en el texto, se marca como completada (tachado + fondo verde). Si está pendiente, se ve con fondo rosa.

## Estilos

- El fondo principal es negro, para que las tareas resalten.
- Tareas pendientes: fondo rosa claro, texto negro.
- Tareas completadas: fondo verde claro y tachado.
- Botón Agregar en azul, botón Eliminar en rojo.

## Resultado esperado

1. Escribo una tarea en el formulario y presiono agregar aparece en la lista con fondo rosa.
2. Hago clic en el texto de la tarea → se marca como completada (verde + tachado).
3. Presiono Eliminar → la tarea desaparece.

## Conclusión

Con este proyecto demuestro que sé usar:

- **React Hooks (`useState`)** para manejar estado.
- **Props** para comunicar componentes.
- **Renderizado dinámico** con `.map()`.
- **Estilos CSS** para mejorar la experiencia visual.

## Instalación y ejecución

1. Clona este repositorio o descarga los archivos.
2. Instala las dependencias:
   ```bash
   npm install
   ```

Ejecutamos el proyecto en modo desarrollo : npm run dev
