import { useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';
import styles from './Card.module.css';
import { useIsActive } from '../contexts/IsActive';

const Card = ({ tarefa, tempo }: IFormValues) => {
	const [ativo, setAtivo] = useState(false);
	const { isActive, addIsActive } = useIsActive();

	const activate = () => {
		addIsActive(tarefa);
		setAtivo(false);
		if (isActive === tarefa) {
			setAtivo(true);
		}
	}

	return (
		<div
			className={`${styles.container} ${ativo ? styles.containerActive : ''}`}
			onClick={activate}
    >
			<label>{tarefa}</label>
			<span>{tempo}</span>
		</div>
	);
};

export default Card;
