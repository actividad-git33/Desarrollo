import { useState } from "react";

function FormularioTarea({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarTarea(texto);
    setTexto(""); // limpia el input después de agregar
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTarea;
