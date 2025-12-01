import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="header">
      <h1>Catálogo de Livros</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'claro' ? 'Escuro' : 'Claro'}
      </button>
    </header>
  );
}