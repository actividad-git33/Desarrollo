function CabeceraCV({ nombre, cargo, ciudad, contacto, foto }) {
  return (
    <header style={{ textAlign: "center" }}>
      <img
        src={foto}
        alt={`Foto de ${nombre}`}
        style={{ width: "150px", borderRadius: "8px", marginBottom: "1rem" }}
      />
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>
        {ciudad} | {contacto}
      </p>
    </header>
  );
}

export default CabeceraCV;
