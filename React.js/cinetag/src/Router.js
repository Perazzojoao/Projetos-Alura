import Banner from "components/Banner";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritosProvider from "components/Context/Favoritos";

const AppRoutes = () => {
  return ( 
    <BrowserRouter>
      <Header />
      <Banner />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
 
export default AppRoutes;