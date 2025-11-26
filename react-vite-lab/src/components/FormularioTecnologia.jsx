import { useState } from "react";
import "../cv.css";

function FormularioTecnologia({ agregarTecnologia, tecnologias }) {
  const [confirmacion, setConfirmacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTec = e.target.tecnologia.value.trim();

    if (!nuevaTec) {
      setConfirmacion("Ingresa una tecnología válida");
    } else if (
      tecnologias.some((tec) => tec.toLowerCase() === nuevaTec.toLowerCase())
    ) {
      setConfirmacion(`"${nuevaTec}" ya está en la lista`);
    } else {
      agregarTecnologia(nuevaTec);
      setConfirmacion(`Tecnología "${nuevaTec}" agregada`);
      e.target.reset();
    }

    setTimeout(() => setConfirmacion(""), 2000);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        name="tecnologia"
        placeholder="Agregar tecnología..."
      />
      <button type="submit">Agregar</button>
      {confirmacion && <p className="mensaje-confirmacion">{confirmacion}</p>}
    </form>
  );
}

export default FormularioTecnologia;
