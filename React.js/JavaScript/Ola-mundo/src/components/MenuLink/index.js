import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = ({ href, children }) => {

  return ( 
    <NavLink className={({ isActive,  }) => `${styles.link} ${isActive ? styles.linkDestacado : ''}`} to={href} end >{children}</NavLink>
  );
}
 
export default MenuLink;