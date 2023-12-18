import { useEffect, useState } from 'react';
import { useIsActive } from '../../contexts/IsActive';
import styles from './Relogio.module.css';
import { converteTempo } from './toDate';
import { useTimer } from '../../contexts/Timer';

const Relogio = () => {

  const { isActive } = useIsActive();
  const { time, setTimer } = useTimer();
  const [ displayTimer, setDisplayTimer ] = useState<string[]>([])

  useEffect (() => {
    const tempoConvertido = converteTempo(isActive.tempo);
    setTimer(tempoConvertido);

    const spredTime: string[] = []

    for (let i = 0; i < tempoConvertido.length; i++) {
      spredTime.push(tempoConvertido.charAt(i));
    }
    setDisplayTimer(spredTime);
  }, [isActive])
  return ( 
    <>
      <span className={styles.relogioNumber}>{displayTimer[0]}</span>
      <span className={styles.relogioNumber}>{displayTimer[1]}</span>
      <span className={styles.relogioDivider}>:</span>
      <span className={styles.relogioNumber}>{displayTimer[3]}</span>
      <span className={styles.relogioNumber}>{displayTimer[4]}</span>
    </>
  );
}
 
export default Relogio;