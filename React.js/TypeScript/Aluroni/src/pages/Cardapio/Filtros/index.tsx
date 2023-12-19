import { useContext } from 'react';
import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import { FiltroContext } from 'contexts/FiltroContext';
import classNames from 'classnames';;

type ItemFilter = (typeof filtros)[0];

const Filtros = () => {
	const { filtro, setFiltro } = useContext(FiltroContext);

	const selecionaFiltro = (item: ItemFilter) => {
		setFiltro((prev) => {
			if (prev !== item.id) {
				return item.id;
			}
			return null;
		});
	};

	return (
		<div className={styles.filtros}>
			{filtros.map((item) => (
				<button
					className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === item.id
          })}
					key={item.id}
					onClick={() => selecionaFiltro(item)}
        >
					{item.label}
				</button>
			))}
		</div>
	);
};

export default Filtros;
