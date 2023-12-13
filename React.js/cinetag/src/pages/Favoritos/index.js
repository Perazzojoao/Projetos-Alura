import Card from 'components/Card';
import styles from './Favoritos.module.css';
import Titulo from "components/Titulo";

const Favoritos = () => {
  return ( 
    <main>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container} >
        <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
      </section>
    </main>
  );
}
 
export default Favoritos;