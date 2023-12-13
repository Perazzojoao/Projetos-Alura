import Card from 'components/Card';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'components/Context/Favoritos';

const Favoritos = () => {
	const { favorito, addFavorito } = useFavoritoContext();

	return (
		<main>
			<Titulo>
				<h1>Meus Favoritos</h1>
			</Titulo>
			<section className={styles.container}>
				{favorito.map((video) => (
					<Card
						key={video.id}
						id={video.id}
						titulo={video.titulo}
						capa={video.capa}
						video={video}
					/>
				))}
			</section>
		</main>
	);
};

export default Favoritos;
