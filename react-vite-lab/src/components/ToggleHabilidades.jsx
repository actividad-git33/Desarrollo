import Habilidades from "./Habilidades";
import "../cv.css";

function ToggleHabilidades({ mostrar, onToggle, tecnologias }) {
  return (
    <div className="toggle-habilidades">
      <button onClick={onToggle}>
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
      {mostrar && <Habilidades tecnologias={tecnologias} />}
    </div>
  );
}

export default ToggleHabilidades;
