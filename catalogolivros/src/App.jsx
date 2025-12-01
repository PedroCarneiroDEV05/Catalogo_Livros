import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';
import Counters from './components/Counters.jsx';
import './App.css';

function AppContent() {
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useLocalStorage('busca', '');
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const { theme } = useTheme();

  
  useEffect(() => {
    fetch('/books.json')
      .then(response => {
        if (!response.ok) throw new Error('Erro ao carregar livros');
        return response.json();
      })
      .then(data => {
        setLivros(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn('books.json não encontrado, usando dados de exemplo');
        const dadosIniciais = [
          { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008 },
          { id: 2, titulo: "You Don't Know JS", autor: "Kyle Simpson", ano: 2015 },
          { id: 3, titulo: "Refactoring", autor: "Martin Fowler", ano: 1999 },
          { id: 4, titulo: "Design Patterns", autor: "Gang of Four", ano: 1994 },
          { id: 5, titulo: "The Pragmatic Programmer", autor: "Andy Hunt", ano: 1999 }
        ];
        setLivros(dadosIniciais);
        setLoading(false);
      });
  }, []);

  const adicionarLivro = (novoLivro) => {
    const livroComId = {
      ...novoLivro,
      id: Date.now()
    };
    setLivros([...livros, livroComId]);
  };

  const removerLivro = (id) => {
    setLivros(livros.filter(livro => livro.id !== id));
  };

  const livrosFiltrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    livro.autor.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) {
    return (
      <div className={`app ${theme}`}>
        <div className="loading"> Carregando livros...</div>
      </div>
    );
  }

  if (erro) {
    return (
      <div className={`app ${theme}`}>
        <div className="error">Erro: {erro}</div>
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <Header />
      <div className="container">
        <SearchBar busca={busca} setBusca={setBusca} />
        <BookForm onAdicionar={adicionarLivro} />
        <BookList livros={livrosFiltrados} onRemover={removerLivro} />
        <Counters total={livros.length} filtrados={livrosFiltrados.length} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;