import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import PaginaErro from './pages/PaginaErro';
import './App.css';
import ContextProvider from './contexts';

function App() {
	return (
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/carrinho' element={<Carrinho />} />
					<Route path='*' element={<PaginaErro />} />
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	);
}

export default App;
