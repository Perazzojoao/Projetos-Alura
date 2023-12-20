import { useContext, useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { OrdenadorContext } from 'contexts/OrdenadorContext';

type Opcao = {
	nome: string;
	value: string;
};

const Ordenador = () => {
	const [aberto, setAberto] = useState(false);
	const [opcaoOrdenador, setOpcaoOrdenador] = useState('Ordenar Por');
	const { ordenador, setOrdenador } = useContext(OrdenadorContext);

	const ordenar = ({ nome, value }: Opcao) => {
		setOrdenador((prev) => {
			if (prev === value) {
				return '';
			}
			return value;
		});

		setOpcaoOrdenador(nome);
	};

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles["ordenador--ativo"]]: ordenador !== ''
			})}
			onClick={() => setAberto((prev) => !prev)}
			onBlur={() => setAberto(false)}>
			<span>{ordenador ? opcaoOrdenador : 'Ordenar Por'}</span>
			{aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles['ordenador__options--ativo']]: aberto,
				})}>
				{opcoes.map((opcao) => (
					<div
						className={styles.ordenador__option}
						key={opcao.value}
						onClick={() => ordenar(opcao)}>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
};

export default Ordenador;
