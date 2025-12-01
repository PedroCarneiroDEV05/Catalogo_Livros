import { Link } from "react-router-dom";

function BookList({ livros, onRemover }) {
  if (livros.length === 0) {
    return <p className="no-books">Nenhum livro encontrado.</p>;
  }

  return (
    <div className="book-list">
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id} className="book-item">
            <span className="book-info">
              <div className="book-info">
                <strong className="book-title">{livro.titulo}</strong>
                <span className="book-author">{livro.autor}</span>
                <span className="book-year">({livro.ano})</span>
              </div>
            </span>

            <div className="book-buttons">
              <Link to={`/catalogo/${livro.id}`} className="btn-details">
                Ver detalhes
              </Link>

              <button
                onClick={() => onRemover(livro.id)}
                className="btn-remove"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;