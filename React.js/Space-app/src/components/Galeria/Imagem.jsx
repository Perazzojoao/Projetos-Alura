import { useState } from 'react';
import styled from 'styled-components';

const FigureStyle = styled.figure`
	width: ${(props) => (props.$expandida ? '90%' : '400px')};
	max-width: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	& > img {
		max-width: 100%;
		border-radius: 20px 20px 0 0;
	}
	figcaption {
		background-color: #001634;
		border-radius: 0px 0px 20px 20px;
		color: #ffffff;
		box-sizing: border-box;
		padding: 16px;
		h3 {
			font-family: 'GandhiSansBold';
			margin: 0;
			font-size: 20px;
		}
		h4 {
			flex-grow: 1;
			font-family: 'GandhiSansRegular';
			margin: 0;
			font-size: 16px;
		}
		footer {
			display: flex;

			div {
				display: flex;
				gap: 18px;

				img {
					cursor: pointer;
				}
			}
		}
	}
`;

const Imagem = ({
	foto,
	aoZoomSolicitado,
	expandida = false,
	aoAlternarFavorito,
	fotosFavoritas = [],
	filtroPesquisa,
	filtrarTags,
}) => {
	const fotoFavorita = fotosFavoritas.find((fotoFav) => fotoFav.titulo === foto.titulo);
	return (
		foto.titulo.toLowerCase().includes(filtroPesquisa) &&
		(foto.tagId === filtrarTags || filtrarTags === 0) && (
			<FigureStyle $expandida={expandida}>
				<img src={foto.path} alt='Imagem do espaço' />
				<figcaption>
					<h3>{foto.titulo}</h3>
					<footer>
						<h4>{foto.fonte}</h4>
						<div>
							<img
								src={`/arquivos/icones/${fotoFavorita ? 'favorito-ativo' : 'favorito'}.png`}
								alt='Ícone de coração'
								onClick={() => aoAlternarFavorito(foto)}
							/>
							{!expandida && (
								<img
									src='/arquivos/icones/expandir.png'
									alt='Ícone de seta dupla'
									onClick={() => aoZoomSolicitado(foto)}
								/>
							)}
						</div>
					</footer>
				</figcaption>
			</FigureStyle>
		)
	);
};

export default Imagem;
