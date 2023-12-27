import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { Prato } from 'types/cardapio';

export default function Item(props: Prato) {
	const { title, description, category, size, serving, price, photo } = props;
	return (
		<div className={styles.item}>
			<div className={styles.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2> {title} </h2>
					<p> {description} </p>
				</div>
				<TagsPrato {...props} />
			</div>
		</div>
	);
}
