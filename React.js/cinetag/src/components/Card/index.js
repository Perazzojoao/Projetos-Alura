import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'components/Context/Favoritos';
import { useNavigate } from 'react-router-dom';

const verificaFavorito = (favorito, id) => {
	const favAtual = favorito.find((video) => video.id === id);

	if (favAtual) return iconeDesfavoritar;
	return iconeFavoritar;
};

const Card = ({ id, titulo, capa }) => {
	const { favorito, addFavorito } = useFavoritoContext();
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<img
				className={styles.capa}
				src={capa}
				alt='Capa do vídeo'
				onClick={() => navigate(`/player/${id}`)}
			/>
			<h2>{titulo}</h2>
			<img
				className={styles.favoritar}
				src={verificaFavorito(favorito, id)}
				alt='Imagem de um coração'
				onClick={() => addFavorito({ id, titulo, capa })}
			/>
		</div>
	);
};

export default Card;
