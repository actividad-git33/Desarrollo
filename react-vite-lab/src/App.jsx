import { useState } from "react";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";
import StackTecnologias from "./components/StackTecnologias";

import fotoPerfil from "./assets/perfil.jpg";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import Habilidades from "./components/Habilidades";
import "./cv.css";

function App() {
  const datosPersonales = {
    nombre: "Dennis González",
    cargo: "Regente de Farmacia",
    ciudad: "Medellín, Antioquia",
    contacto: "degonzalez376@gmail.com",
    foto: fotoPerfil,
  };

  const resumen =
    "Profesional en Regencia de Farmacia con experiencia en logística de medicamentos, documentación técnica, gestión de inventarios y desarrollo web con React.";

  const experiencias = [
    {
      cargo: "Regente de Farmacia",
      empresa: "IPS Sies Salud",
      periodo: "2025 - Actualidad",
    },
    {
      cargo: "Auxiliar de Farmacia",
      empresa: "IPS Suramericana",
      periodo: "2023 - 2025",
    },
    {
      cargo: "Auxiliar de Farmacia",
      empresa: "Clínica León XIII",
      periodo: "2022 - 2023",
    },
  ];

  const educacion = [
    {
      estudio: "Tecnóloga en Regencia de Farmacia",
      institucion: "SENA",
      año: "2022",
    },
    {
      estudio: "Diplomado en Gestión Farmacéutica",
      institucion: "Universidad CES",
      año: "2023",
    },
    {
      estudio: "Curso de Buenas Prácticas de Almacenamiento",
      institucion: "SENA",
      año: "2024",
    },
  ];

  // Estado global de tecnologías y habilidades
  const [tecnologias, setTecnologias] = useState([
    "React",
    "Node.js",
    "Express",
    "SQLite",
  ]);

  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const agregarTecnologia = (tec) => {
    const tecNormalizada = tec.trim().toLowerCase();
    const yaExiste = tecnologias.some(
      (t) => t.trim().toLowerCase() === tecNormalizada
    );

    if (!yaExiste) {
      setTecnologias([...tecnologias, tec]);
    } else {
      alert("Esa tecnología ya está en la lista.");
    }
  };

  return (
    <>
      <CabeceraCV {...datosPersonales} />
      <main>
        <Perfil resumen={resumen} />
        <Experiencia experiencias={experiencias} />
        <Educacion educacion={educacion} />

        {/* Toggle de habilidades controlado desde App */}
        <ToggleHabilidades
          mostrar={mostrarHabilidades}
          onToggle={() => setMostrarHabilidades(!mostrarHabilidades)}
          tecnologias={tecnologias}
        />

        <FormularioTecnologia
          agregarTecnologia={agregarTecnologia}
          tecnologias={tecnologias}
        />

        {/* Render dinámico del stack */}
        <StackTecnologias tecnologias={tecnologias} />
      </main>
    </>
  );
}

export default App;
