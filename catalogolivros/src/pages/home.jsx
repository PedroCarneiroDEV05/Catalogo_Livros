import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Bem-vindo ao Catálogo de Livros</h1>
      <button onClick={() => navigate("/catalogo")}>
        Entrar no Catálogo
      </button>
    </div>
  );
}
