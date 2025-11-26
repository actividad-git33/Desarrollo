import { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length < 3) return;

    const nuevoTodo = { id: Date.now(), title, completed: false };
    console.log("Nuevo todo:", nuevoTodo);
    onAdd(nuevoTodo);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;
