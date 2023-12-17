import { useEffect, useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';
import { useIsActive } from '../contexts/IsActive';
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from './Card.module.css';
import { useDeleteCard } from '../contexts/Formulario';

const Card = ({ tarefa, tempo }: IFormValues) => {
	const [ativo, setAtivo] = useState(false);
	const { isActive, addIsActive } = useIsActive();
	const deleteCard = useDeleteCard();

	useEffect(() => {
		if (isActive.tarefa !== tarefa) {
			setAtivo(false);
		} else {
			setAtivo(true);
		}
		
	}, [isActive, tarefa]);

	return (
		<div
			className={`${styles.container} ${ativo ? styles.containerActive : ''}`}
			onClick={() => addIsActive({ tarefa, tempo })}
    >
			<label>{tarefa}</label>
			<span>{tempo}</span>
			<IoCloseCircleOutline className={styles.deleteCard} onClick={() => deleteCard(tarefa)}/>
		</div>
	);
};

export default Card;
