import styled from 'styled-components';
import Titulo from '../Titulo';
import Populares from './Populares';
import Tags from './Tags';
import Imagem from './Imagem';

const GaleriaContainer = styled.div`
	display: flex;
`;

const SecaoFluida = styled.section`
	flex-grow: 1;
`;

const ImagemContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 25px;
`;

const Galeria = ({
	fotos = [],
	aoFotoSelecionada,
	aoAlternarFavorito,
	fotosFavoritas,
	filtroPesquisa,
	aoAcionarTag,
	filtrarTags
}) => {
	return (
		<>
			<Tags aoAcionarTag={aoAcionarTag} />
			<GaleriaContainer>
				<SecaoFluida>
					<Titulo>Navegue pela galeria</Titulo>
					<ImagemContainer>
						{fotos.map((foto) => (
							<Imagem
								aoAlternarFavorito={aoAlternarFavorito}
								aoZoomSolicitado={aoFotoSelecionada}
								key={foto.id}
								foto={foto}
								fotosFavoritas={fotosFavoritas}
								filtroPesquisa={filtroPesquisa}
								filtrarTags={filtrarTags}
							/>
						))}
					</ImagemContainer>
				</SecaoFluida>
				<Populares />
			</GaleriaContainer>
		</>
	);
};

export default Galeria;
