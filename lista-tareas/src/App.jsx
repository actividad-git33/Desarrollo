import { useState } from "react";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  // Agregar tarea
  const agregarTarea = (texto) => {
    if (texto.trim() === "" || tareas.some((t) => t.texto === texto.trim()))
      return;

    const nuevaTarea = {
      id: Date.now(), // identificador único
      texto: texto.trim(), // el texto de la tarea
      completada: false, // estado inicial
    };

    setTareas([...tareas, nuevaTarea]);
  };

  // Eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // Completar tarea
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(tareasActualizadas);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
      />
    </div>
  );
}

export default App;
