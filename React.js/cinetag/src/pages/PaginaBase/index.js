import Banner from 'components/Banner';
import Container from 'components/Container';
import FavoritosProvider from 'components/Context/Favoritos';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const PaginaBase = () => {
	return (
		<Container>
			<FavoritosProvider>
				<Header />
				<Banner />
				<Outlet />
			</FavoritosProvider>
		</Container>
	);
};

export default PaginaBase;
