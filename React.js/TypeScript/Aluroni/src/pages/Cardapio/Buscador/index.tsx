import styles from './Buscador.module.scss';
import { useContext } from 'react';
import { BuscadorContext } from 'contexts/BuscadorContext';
import { CgSearch } from 'react-icons/cg'

const Buscador = () => {
	const { busca, setBusca } = useContext(BuscadorContext);

	return (
    <div className={styles.buscador}>
      <input
        type='text'
        placeholder='Buscar'
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />
      <CgSearch size={20} color='#4C4D5E' />
    </div>
	);
};

export default Buscador;
