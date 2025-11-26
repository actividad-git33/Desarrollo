import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSqlite } from "react-icons/si";
import "../cv.css";

function Habilidades({ tecnologias }) {
  const obtenerIcono = (tec) => {
    switch (tec.toLowerCase()) {
      case "react":
        return <FaReact />;
      case "node.js":
        return <FaNodeJs />;
      case "express":
        return <SiExpress />;
      case "sqlite":
        return <SiSqlite />;
      default:
        return null;
    }
  };

  return (
    <div className="habilidades">
      <h3>Habilidades</h3>
      <ul className="habilidades-lista">
        {tecnologias.map((tec, index) => (
          <li key={index} className="habilidad-item">
            {obtenerIcono(tec)} <span>{tec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Habilidades;
