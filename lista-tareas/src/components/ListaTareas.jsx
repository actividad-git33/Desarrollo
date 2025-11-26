import Tarea from "./Tarea";

function ListaTareas({ tareas, eliminarTarea, completarTarea }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
