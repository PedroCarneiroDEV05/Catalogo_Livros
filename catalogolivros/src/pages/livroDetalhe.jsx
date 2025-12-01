import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LivroDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [livrosSalvos] = useLocalStorage("livros", []);

  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const encontradoLocal = livrosSalvos.find(l => l.id === Number(id));

    if (encontradoLocal) {
      setLivro(encontradoLocal);
      setLoading(false);
      return;
    }

    fetch("/books.json")
      .then(res => res.json())
      .then(data => {
        const encontradoJSON = data.find(l => l.id === Number(id));
        setLivro(encontradoJSON || null);
        setLoading(false);
      })
      .catch(() => {
        setLivro(null);
        setLoading(false);
      });

  }, [id, livrosSalvos]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!livro) {
    return (
      <div className="livro-nao-encontrado">
        <h2>Livro não encontrado!</h2>
        <button className="btn-voltar" onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{livro.titulo}</h2>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Ano:</strong> {livro.ano}</p>

      <button className="btn-voltar" onClick={() => navigate(-1)}>Voltar</button>

    </div>
  );
}
