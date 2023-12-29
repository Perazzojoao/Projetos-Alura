import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VitrineRestaurantes from './pages/VitrineRestaurantes';
import AdmRestaurantes from './pages/Administracao/Restaurantes/AdmRestaurantes';
import FormRestaurante from './pages/Administracao/Restaurantes/FormRestaurante';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/restaurantes' element={<VitrineRestaurantes />} />
			<Route path='/admin/restaurantes' element={<AdmRestaurantes />} />
			<Route path='/admin/restaurantes/novo' element={<FormRestaurante />} />
		</Routes>
	);
}

export default App;
