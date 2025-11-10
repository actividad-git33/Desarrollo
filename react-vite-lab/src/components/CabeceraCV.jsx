import perfil from "../assets/perfil.jpg";

function CabeceraCV() {
  return (
    <header>
      <img src={perfil} alt="Foto de Dennis" className="foto-perfil" />
      <h1>Dennis González</h1>
      <h2>Regente de Farmacia</h2>
      <p>
        Tel: 3005164213 | Email: degonzalez376@gmail.com| Medellin, Antioquia
      </p>
    </header>
  );
}

export default CabeceraCV;
