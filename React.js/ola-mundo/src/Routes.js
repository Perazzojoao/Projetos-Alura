import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
