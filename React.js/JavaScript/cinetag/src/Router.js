import Footer from 'components/Footer';
import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Player from 'pages/Player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from 'pages/PaginaBase';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaBase />}>
					<Route index element={<Inicio />} />
					<Route path='favoritos' element={<Favoritos />} />
					<Route path='videos/:id' element={<Player />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRoutes;
