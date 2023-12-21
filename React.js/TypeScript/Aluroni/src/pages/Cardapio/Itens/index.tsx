import { useContext, useRef } from 'react';
import Item from './Item';
import styles from './Itens.module.scss';
import cardapio from './itens.json';
import { FiltroContext } from 'contexts/FiltroContext';
import { OrdenadorContext } from 'contexts/OrdenadorContext';

const Itens = () => {
	const { filtro } = useContext(FiltroContext);
	const { ordenador } = useContext(OrdenadorContext);
	const cardapioOriginal = useRef([...cardapio]);

	function retornaOrdem(a: typeof cardapio[0], b: typeof cardapio[0]): number {
		switch(ordenador) {
			case 'porcao': 
				return a.size > b.size ? 1 : -1;
			case 'qtd_pessoas':
				return a.serving > b.serving ? 1 : -1;
			case 'preco':
				return a.price > b.price ? 1 : -1;
			default:
				 return 0;
		}
	}

	function defineLista () {
		if (ordenador === '') {
			return cardapioOriginal.current;
		}
		return cardapio.sort((a, b) => retornaOrdem(a, b));
	}

	return (
		<div className={styles.itens}>
			{defineLista().map((item) => {
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
