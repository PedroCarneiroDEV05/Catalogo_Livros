import React from 'react';

function BookList({ livros, onRemover }) {
  if (livros.length === 0) {
    return <p className="no-books">Nenhum livro encontrado.</p>;
  }

  return (
    <div className="book-list">
      <h2> Lista de Livros</h2>
      <ul>
        {livros.map(livro => (
          <li key={livro.id} className="book-item">
            <span className="book-info">
              <strong>{livro.titulo}</strong> — {livro.autor} ({livro.ano})
            </span>
            <button 
              onClick={() => onRemover(livro.id)} 
              className="btn-remove"
            >
               Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { BookList };
export default BookList;