function Tarea({ id, texto, completada, eliminarTarea, completarTarea }) {
  return (
    <li
      style={{
        backgroundColor: completada ? "#d4edda" : "#ffe0f0", // verde si está completada, rosa si no
        textDecoration: completada ? "line-through" : "none", // tachado si está completada
        color: "#000",
      }}
    >
      <span onClick={() => completarTarea(id)} style={{ cursor: "pointer" }}>
        {texto}
      </span>
      <button onClick={() => eliminarTarea(id)}>Eliminar</button>
    </li>
  );
}

export default Tarea;
