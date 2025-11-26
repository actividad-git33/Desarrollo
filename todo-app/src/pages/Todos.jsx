import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerTodos = async () => {
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        if (!respuesta.ok) throw new Error("Error al obtener los datos");
        const datos = await respuesta.json();
        setTodos(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    obtenerTodos();
  }, []);

  const handleAddTodo = (nuevoTodo) => {
    setTodos([nuevoTodo, ...todos]);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Listado de Todos</h2>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default Todos;
