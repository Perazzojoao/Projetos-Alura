import styled from 'styled-components';
import Imagem from '../Galeria/Imagem';
import { useState } from 'react';

const OverLay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const DialogStyle = styled.dialog`
	position: absolute;
	top: 294px;
  background-color: transparent;
  border: none;
  width: 1156px;
  padding: 0;

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    color: #FFFFFF;
    position: relative;
    bottom: 790px;
    left: 980px;
    cursor: pointer;
    img {
      width: 32px;
    }
  }
`;

const ModalZoom = ({ foto, aoAlternarFavorito, fotosFavoritas }) => {
  const [overLay, setOverLay] = useState(true);
	return (
		<>
			{foto && (
				<>
					{overLay && <OverLay />}
					<DialogStyle open={!!foto}>
						<Imagem foto={foto} fotosFavoritas={fotosFavoritas} aoAlternarFavorito={aoAlternarFavorito} expandida={true} />
						<form method='dialog' onSubmit={() => setOverLay(false)}>
							<button type='submit'>
                <img src='/arquivos/icones/fechar.png' alt='Imagem de um X' />
              </button>
						</form>
					</DialogStyle>
				</>
			)}
		</>
	);
};

export default ModalZoom;
