// src/pages/Catalogo.jsx
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import SearchBar from "../components/SearchBar";
import { BookForm } from "../components/BookForm";
import { BookList } from "../components/BookList";
import Counters from "../components/Counters";

import "../index.css"; // <-- seu CSS está aqui

export default function Catalogo() {
  const [livros, setLivros] = useLocalStorage("livros", []);
  const [busca, setBusca] = useLocalStorage("busca", "");
  const [loading, setLoading] = useLocalStorage("loading", true);

  useEffect(() => {
    if (livros.length > 0) {
      setLoading(false);
      return;
    }

    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => {
        setLivros(data);
        setLoading(false);
      })
      .catch(() => {
        const dadosIniciais = [
          { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008 },
          { id: 2, titulo: "You Don't Know JS", autor: "Kyle Simpson", ano: 2015 },
          { id: 3, titulo: "Refactoring", autor: "Martin Fowler", ano: 1999 },
        ];
        setLivros(dadosIniciais);
        setLoading(false);
      });
  }, []);

  const adicionarLivro = (novoLivro) => {
    const livroComId = {
      ...novoLivro,
      id: Date.now(),
    };
    setLivros([...livros, livroComId]);
  };

  const removerLivro = (id) => {
    setLivros(livros.filter((livro) => livro.id !== id));
  };

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    livro.autor.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Carregando livros...</div>;
  }

  return (
    <div className="container">
      <SearchBar busca={busca} setBusca={setBusca} />

      <BookForm onAdicionar={adicionarLivro} />

      <BookList livros={livrosFiltrados} onRemover={removerLivro} />

      <Counters total={livros.length} filtrados={livrosFiltrados.length} />
    </div>
  );
}
