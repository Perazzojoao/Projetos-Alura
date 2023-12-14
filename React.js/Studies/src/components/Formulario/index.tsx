import Button from '../Button';
import styles from './Formulario.module.css';

const Formulario = () => {
	return (
		<form className={styles.container}>
			<div className={styles.tarefa}>
				<label htmlFor='tarefa'>Adicione uma nova tarefa</label>
				<input
					type='text'
					name='tarefa'
					id='tarefa'
					placeholder='O que você quer estudar?'
					required
				/>
			</div>
			<div className={styles.tempo}>
				<label htmlFor='tempo'>Tempo</label>
				<input
					type='time'
					step={1}
					name='tempo'
					id='tempo'
					min='00:00:00'
					max='01:30:00'
					required
				/>
			</div>
			<Button>Adicionar</Button>
		</form>
	);
};

export default Formulario;
