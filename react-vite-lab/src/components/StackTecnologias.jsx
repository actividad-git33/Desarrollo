import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSqlite } from "react-icons/si";
import "../cv.css";

function StackTecnologias({ tecnologias }) {
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
    <section className="stack">
      <h3>Stack Tecnológico</h3>
      <div className="stack-grid">
        {tecnologias.map((tec, index) => (
          <div key={index} className="stack-item">
            {obtenerIcono(tec)} <span>{tec}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StackTecnologias;
