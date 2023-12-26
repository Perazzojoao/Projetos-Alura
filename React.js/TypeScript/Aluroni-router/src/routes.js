import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<main>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
					</Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default AppRouter;
