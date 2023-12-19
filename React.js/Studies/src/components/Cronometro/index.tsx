import { useEffect } from 'react';
import Button from '../Button';
import { useTimer } from '../contexts/Timer';
import styles from './Cronometro.module.css';
import Relogio from './Relogio';
import { useIsActive } from '../contexts/IsActive';

const Cronometro = () => {
	const { time, startTimer, active, setIsActive } = useTimer();
  const { addIsActive } = useIsActive();

	useEffect(() => {
    if (active === false) {
      addIsActive({tarefa: '', tempo: ''});
    } else {
      startTimer();
    }
	}, [active]);

  useEffect(() => {
    if (time === '00:00') {
      setIsActive(false);
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
				Começar!
			</Button>
		</div>
	);
};

export default Cronometro;
