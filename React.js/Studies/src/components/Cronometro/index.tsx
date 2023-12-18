import Button from '../Button';
import styles from './Cronometro.module.css';
import Relogio from './Relogio';

const Cronometro = () => {
  return ( 
    <div className={styles.container}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio />
      </div>
      <Button timer={true}>
        Começar!
      </Button>
    </div>
  );
}
 
export default Cronometro;