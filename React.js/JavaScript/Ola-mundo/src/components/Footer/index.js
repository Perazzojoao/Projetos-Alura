import styles from './Footer.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
      <MarcaRegistrada />
      <span>Desenvolvido por Alura.</span>
    </footer>
   );
}
 
export default Footer;