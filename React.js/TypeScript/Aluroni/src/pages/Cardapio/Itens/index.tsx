import { useContext } from 'react';
import Item from './Item';
import styles from './Itens.module.scss';
import cardapio from './itens.json';
import { FiltroContext } from 'contexts/FiltroContext';

const Itens = () => {
	const { filtro } = useContext(FiltroContext);

	return (
		<div className={styles.itens}>
			{cardapio.map((item) => {
				if (filtro === item.category.id) {
					return <Item key={item.id} {...item} />;
				} else if (!filtro) {
					return <Item key={item.id} {...item} />;
				}
				return <></>
			})}
		</div>
	);
};

export default Itens;
