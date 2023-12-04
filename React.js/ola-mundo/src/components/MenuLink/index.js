import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = ({ href, children }) => {
  const location = useLocation();

  return ( 
    <Link className={`${styles.link} ${location.pathname === href ? styles.linkDestacado : ''}`} to={href} >{children}</Link>
  );
}
 
export default MenuLink;