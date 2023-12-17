import { useEffect, useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';
import { useIsActive } from '../contexts/IsActive';
import styles from './Card.module.css';

const Card = ({ tarefa, tempo }: IFormValues) => {
	const [ativo, setAtivo] = useState(false);
	const { isActive, addIsActive } = useIsActive();

	useEffect(() => {
		if (isActive.tarefa !== tarefa) {
			setAtivo(false);
		} else {
			setAtivo(true);
		}
		
	}, [isActive]);

	return (
		<div
			className={`${styles.container} ${ativo ? styles.containerActive : ''}`}
			onClick={() => addIsActive({ tarefa, tempo })}
    >
			<label>{tarefa}</label>
			<span>{tempo}</span>
		</div>
	);
};

export default Card;
