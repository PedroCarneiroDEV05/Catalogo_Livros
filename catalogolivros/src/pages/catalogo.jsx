import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import SearchBar from "../components/SearchBar";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import Counters from "../components/Counters";

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

  const buscaLower = busca.toLowerCase();
  const livrosFiltrados = livros.filter((livro) => {
    const tituloMatch = livro.titulo.toLowerCase().includes(buscaLower);
    const autorMatch = livro.autor.toLowerCase().includes(buscaLower);
    return tituloMatch || autorMatch;
  });

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
