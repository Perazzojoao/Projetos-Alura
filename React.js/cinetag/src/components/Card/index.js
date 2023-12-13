import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

const Card = ({ id, titulo, capa }) => {
	return (
		<div className={styles.container}>
			<img className={styles.capa} src={capa} alt='Capa do vídeo' />
			<h2>{titulo}</h2>
			<img className={styles.favoritar} src={iconeFavoritar} alt='Imagem de um coração' />
		</div>
	);
};

export default Card;
