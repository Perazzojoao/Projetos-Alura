import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
