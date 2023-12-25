import Menu from 'components/Menu';
import styles from './Inicio.module.scss';
import cardapio from 'data/cardapio.json';

const Inicio = () => {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <Menu />
      <h3 className={styles.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button className={styles.recomendado__botao}>Ver mais</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inicio;
