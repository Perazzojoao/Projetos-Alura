import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

const Menu = () => {
  return ( 
    <header>
      <nav className={styles.navegacao}>
        <MenuLink href='/' >
          Início
        </MenuLink>
        <MenuLink href='/sobremim' >
          Sobre mim
        </MenuLink>
      </nav>
    </header>
  );
}
 
export default Menu;