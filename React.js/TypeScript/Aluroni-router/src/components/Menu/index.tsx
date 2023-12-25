import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';


const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
};

export default Menu;