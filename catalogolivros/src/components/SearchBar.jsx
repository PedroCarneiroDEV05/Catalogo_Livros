import { useRef, useEffect } from "react";

const SearchBar = ({ busca, setBusca }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar por título ou autor..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
