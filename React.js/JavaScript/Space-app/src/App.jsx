import styled from 'styled-components';
import EstilosGlobais from './components/EstilosGlobais';
import Cabecalho from './components/Cabecalho';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import Galeria from './components/Galeria';

import fotos from './fotos.json';
import { useState } from 'react';
import ModalZoom from './components/ModalZoom';
import Footer from './components/Footer';

const FundoGradiente = styled.div`
	background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
	width: 100%;
	min-height: 100vh;
`;

const AppContainer = styled.div`
	width: 1440px;
	margin: 0 auto;
	max-width: 100%;
`;

const MainContainer = styled.main`
	display: flex;
	gap: 24px;
`;

const ConteudoGaleria = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const App = () => {
	const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
	const [fotoSelecionada, setFotoSelecionada] = useState(null);
	const [fotosFavoritas, setFotosFavoritas] = useState([]);
	const [filtroPesquisa, setFiltroPesquisa] = useState('');
	const [filtrarTags, setFiltrarTags] = useState(0);

	const aoAlternarFavorito = (foto) => {
		if (!fotosFavoritas.includes(foto)) {
			setFotosFavoritas((antigo) => [...antigo, foto]);
		} else {
			const favoritosFiltrados = fotosFavoritas.filter((fotoFavorita) => fotoFavorita !== foto);
			setFotosFavoritas(favoritosFiltrados);
		}
	};

	const barraDePesquisa = (valor) => {
		setFiltroPesquisa(valor);
	};

	const aoAcionarTag = (tagId) => {
		setFiltrarTags(tagId);
	};

	return (
		<FundoGradiente>
			<EstilosGlobais />
			<AppContainer>
				<Cabecalho aoDigitar={barraDePesquisa} />
				<MainContainer>
					<SideBar />
					<ConteudoGaleria>
						<Banner backgroundImage='/public/arquivos/banner.png'>
							A galeria mais completa de fotos do espaço!
						</Banner>
						<Galeria
							aoAlternarFavorito={aoAlternarFavorito}
							aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
							fotos={fotosDaGaleria}
							fotosFavoritas={fotosFavoritas}
							filtroPesquisa={filtroPesquisa.toLocaleLowerCase()}
							aoAcionarTag={aoAcionarTag}
							filtrarTags={filtrarTags}
						/>
					</ConteudoGaleria>
				</MainContainer>
			</AppContainer>
			<ModalZoom
				foto={fotoSelecionada}
				fotosFavoritas={fotosFavoritas}
				aoAlternarFavorito={aoAlternarFavorito}
			/>
			<Footer />
		</FundoGradiente>
	);
};

export default App;
