import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return ( 
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/player" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
 
export default AppRoutes;