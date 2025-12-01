import React, { useState, useEffect, useRef, createContext, useContext } from 'react';

const BookForm = ({ onAdicionar }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!titulo.trim() || !autor.trim() || !ano.trim()) {
      alert(' Preencha todos os campos!');
      return;
    }

    if (isNaN(ano) || ano < 1000 || ano > new Date().getFullYear()) {
      alert(' Digite um ano válido!');
      return;
    }

    onAdicionar({ titulo, autor, ano: Number(ano) });
    
    setTitulo('');
    setAutor('');
    setAno('');
  };

  return (
    <div className="book-form-section">
      <h2> Novo Livro</h2>
      <div className="book-form">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="form-input"
        />
        <button onClick={handleSubmit} className="btn-add">Adicionar</button>
      </div>
    </div>
  );
};

export { BookForm };
export default BookForm;