function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      {todo.title}{" "}
      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? "Desmarcar" : "Completar"}
      </button>
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
