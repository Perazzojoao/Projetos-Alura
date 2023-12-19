import { useEffect, useState } from 'react';
import Button from '../Button';
import { useTimer } from '../contexts/Timer';
import styles from './Cronometro.module.css';
import Relogio from './Relogio';
import { useIsActive } from '../contexts/IsActive';
import { useEndTask } from '../contexts/Formulario';

const Cronometro = () => {
	const { time, startTimer } = useTimer();
	const [ active, setIsActive ] = useState(false);
  const { isActive, addIsActive } = useIsActive();
	const { endTask } = useEndTask();

	useEffect(() => {
    if (active === false) {
      addIsActive({tarefa: '', tempo: ''});
    } else {
      startTimer(active);
    }
	}, [active]);

  useEffect(() => {
    if (time === '00:00') {
      setIsActive(false);
			endTask(isActive);
    }
  }, [time]);
	return (
		<div className={styles.container}>
			<p>Escolha um card e inicie o cronômetro</p>
			<div className={styles.relogioWrapper}>
				<Relogio />
			</div>
			<Button
				onClick={() => {
					setIsActive((prev) => !prev);
				}}>
				{active ? 'Parar!' : 'Começar!'}
			</Button>
		</div>
	);
};

export default Cronometro;
