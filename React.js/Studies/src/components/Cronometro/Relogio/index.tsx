import styles from './Relogio.module.css';

const Relogio = () => {
  return ( 
    <>
      <span className={styles.relogioNumber}>0</span>
      <span className={styles.relogioNumber}>0</span>
      <span className={styles.relogioDivider}>:</span>
      <span className={styles.relogioNumber}>0</span>
      <span className={styles.relogioNumber}>0</span>
    </>
  );
}
 
export default Relogio;