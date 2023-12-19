import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';
import videos from 'json/db.json';
import Card from 'components/Card';

const Inicio = () => {
	return (
		<main>
			<Titulo>
				<h1>Um lugar para guardar seus vídeos e filmes!</h1>
			</Titulo>
			<section className={styles.container}>
				{videos.map((video) => (
					<Card key={video.id} id={video.id} capa={video.capa} titulo={video.titulo} />
				))}
			</section>
		</main>
	);
};

export default Inicio;
