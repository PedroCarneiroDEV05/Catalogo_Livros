import { Outlet, NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />

      <nav className="menu">
        <NavLink to="/" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Home</NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Catálogo</NavLink>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
