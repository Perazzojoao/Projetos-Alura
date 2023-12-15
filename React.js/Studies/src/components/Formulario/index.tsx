import { useState } from 'react';
import Button from '../Button';
import { useFormularioContext } from '../contexts/Formulario';
import styles from './Formulario.module.css';

const Formulario = () => {
	const { formHandler } = useFormularioContext();
	const [tarefa, setTarefa] = useState('');
	const [tempo, setTempo] = useState('');

	function submitHendler(event: React.FormEvent) {
		event.preventDefault();
		formHandler({ tarefa, tempo });
	}

	return (
		<form className={styles.container} onSubmit={(event) => submitHendler(event)}>
			<div className={styles.campos}>
				<div className={styles.tarefa}>
					<label htmlFor='tarefa'>Adicione uma nova tarefa</label>
					<input
						type='text'
						name='tarefa'
						id='tarefa'
						placeholder='O que você quer estudar?'
						required
						onChange={(event) => setTarefa(event.target.value)}
					/>
				</div>
				<div className={styles.tempo}>
					<label htmlFor='tempo'>Tempo</label>
					<input
						type='time'
						name='tempo'
						id='tempo'
						step={1}
						min='00:00:00'
						max='01:30:00'
						defaultValue='00:00:00'
						required
						onChange={(event) => setTempo(event.target.value)}
					/>
				</div>
			</div>
			<Button type='submit'>Adicionar</Button>
		</form>
	);
};

export default Formulario;
