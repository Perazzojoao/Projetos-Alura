import { useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';
import styles from './Card.module.css';

const Card = ({ tarefa, tempo }: IFormValues) => {
	const [ativo, setAtivo] = useState(false);

	return (
		<div
			className={`${styles.container} ${ativo ? styles.containerActive : ''}`}
			onClick={() => setAtivo((prev) => !prev)}
    >
			<label>{tarefa}</label>
			<span>{tempo}</span>
		</div>
	);
};

export default Card;
