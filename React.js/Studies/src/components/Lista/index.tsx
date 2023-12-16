import Card from '../Card';
import { useFormularioContext } from '../contexts/Formulario';
import styles from './Lista.module.css';

const Lista = () => {
  const { formValues } = useFormularioContext();

  return ( 
    <aside className={styles.container}>
      <h1>Estudos do dia</h1>
      {formValues.map(tarefa => <Card key={tarefa.tarefa} tarefa={tarefa.tarefa} tempo={tarefa.tempo} />)}
    </aside>
  );
}
 
export default Lista;