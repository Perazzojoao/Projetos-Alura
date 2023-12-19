import { useEffect, useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';
import { useIsActive } from '../contexts/IsActive';
import { IoCloseCircleOutline } from 'react-icons/io5';
import styles from './Card.module.css';
import { useDeleteCard, useEndTask } from '../contexts/Formulario';

const Card = ({ tarefa, tempo }: IFormValues) => {
	const [ativo, setAtivo] = useState(false);
	const [ finished, setFinished ] = useState('');
	const { isActive, addIsActive } = useIsActive();
	const { formValues } = useEndTask();
	const deleteCard = useDeleteCard();

	const tarefaAtual = formValues.find(item => item.tarefa === tarefa);

	useEffect(() => {
		if (isActive.tarefa !== tarefa) {
			setAtivo(false);
		} else {
			setAtivo(true);
		}
	}, [isActive, tarefa]);

	useEffect(() => {
		if (tarefaAtual?.finished) {
			setFinished(styles.containerFinished)
		}
	}, [tarefaAtual]);

	return (
		<>
			<div
				className={`${styles.container} ${finished !== '' ? finished : ativo ? styles.containerActive : ''}`}
				onClick={() => !finished ? addIsActive({ tarefa, tempo }) : ''}>
				<div className={styles.contentWrapper}>
					<label>{tarefa}</label>
					<span>{tempo}</span>
				</div>
				<IoCloseCircleOutline className={styles.deleteCard} onClick={() => deleteCard(tarefa)} />
			</div>
		</>
	);
};

export default Card;
