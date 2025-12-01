import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import LivroDetalhe from "./pages/livroDetalhe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalogo" element={<Catalogo />} />     
        <Route path="catalogo/:id" element={<LivroDetalhe />} />
      </Route>
    </Routes>
  );
}

export default App;
