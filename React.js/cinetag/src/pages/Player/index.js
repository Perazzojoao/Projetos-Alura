import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import videos from 'json/db.json';
import { useParams } from 'react-router-dom';

const Player = () => {
	const parametros = useParams();
	const video = videos.find((video) => video.id === Number(parametros.id));

	return (
		<main>
			<Titulo>
				<h1>Player...</h1>
			</Titulo>
      <section className={styles.container} >
        <iframe
          width='840'
          height='472.5'
          src={video.link}
          title={video.titulo}
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen>
        </iframe>
      </section>
		</main>
	);
};

export default Player;
