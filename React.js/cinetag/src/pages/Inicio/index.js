import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';

const Inicio = () => {
	return (
		<main className={styles.mainContainer}>
			<Titulo>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Titulo>
		</main>
	);
};

export default Inicio;
