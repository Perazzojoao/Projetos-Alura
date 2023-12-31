import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VitrineRestaurantes from './pages/VitrineRestaurantes';
import AdmRestaurantes from './pages/Administracao/Restaurantes/AdmRestaurantes';
import FormRestaurante from './pages/Administracao/Restaurantes/FormRestaurante';
import PaginaBaseAdmin from 'pages/Administracao/PaginaBaseAdmin';
import AdminPratos from 'pages/Administracao/Pratos/AdminPratos';
import FormPrato from 'pages/Administracao/Pratos/FormPrato';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/restaurantes' element={<VitrineRestaurantes />} />
			<Route path='/admin/' element={<PaginaBaseAdmin />}>
				<Route path='restaurantes' element={<AdmRestaurantes />} />
				<Route path='restaurantes/novo' element={<FormRestaurante />} />
				<Route path='restaurantes/:id' element={<FormRestaurante />} />

				<Route path='pratos' element={<AdminPratos />} />
				<Route path='pratos/novo' element={<FormPrato />} />
			</Route>
		</Routes>
	);
}

export default App;
