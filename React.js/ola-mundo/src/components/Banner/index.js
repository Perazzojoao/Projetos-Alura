import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'

const Banner = () => {
  return ( 
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt='Imagem de um círculo' aria-hidden={true}/>
        <img className={styles.minhaFoto} src='https://github.com/perazzojoao.png' alt='Imagem de João Victor' />
      </div>
    </div>
  );
}
 
export default Banner;