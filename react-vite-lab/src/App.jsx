import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {
  return (
    <>
      <CabeceraCV />
      <main>
        <Perfil />
        <Experiencia />
        <Educacion />
      </main>
    </>
  );
}

export default App;
