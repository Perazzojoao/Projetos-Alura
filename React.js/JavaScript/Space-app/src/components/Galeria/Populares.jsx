import styled from 'styled-components';
import Titulo from '../Titulo';

const PopularesContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 16px;
`;

const ImgPopulares = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
	img {
    position: relative;
		border-radius: 20px;
    transition: transform 0.3s ease-out;
		cursor: pointer;
	}
	img:hover {
		transform: translateY(-10px);
	}
	button {
		background-color: transparent;
		border: 2px solid #c98cf1;
		border-radius: 10px;
		color: #ffffff;
		font-size: 20px;
		line-height: 24px;
		height: 56px;
		cursor: pointer;
	}
	button:hover {
		background-color: rgba(255, 255, 255, 0.06);
	}
`;
const Populares = () => {
	const populares = [
		{
			id: 1,
			path: '/imagens/populares/foto-1.png',
		},
		{
			id: 2,
			path: '/imagens/populares/foto-2.png',
		},
		{
			id: 3,
			path: '/imagens/populares/foto-3.png',
		},
		{
			id: 4,
			path: '/imagens/populares/foto-4.png',
		},
		{
			id: 5,
			path: '/imagens/populares/foto-5.png',
		},
	];

	return (
		<PopularesContainer>
			<Titulo $alinhamento='center'>Populares</Titulo>
			<ImgPopulares>
				{populares.map((img) => (
					<img key={img.id} src={img.path} alt='Imagem do cosmos' />
				))}
				<button>Ver mais</button>
			</ImgPopulares>
		</PopularesContainer>
	);
};

export default Populares;
