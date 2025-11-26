import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenido a Todo App</h1>
      <nav>
        <Link to="/todos">Ver Todos</Link> |<Link to="/registro">Registro</Link>
      </nav>
    </div>
  );
}

export default Home;
