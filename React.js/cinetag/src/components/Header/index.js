import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<Link to='./'>
				<img src={logo} alt='Iagem da logo do Cenetag' />
			</Link>
			<nav className={styles.linkContainer}>
				<NavLink
					className={({ isActive }) => `${isActive ? styles.linkDestacado : styles.link}`}
					to='/'
					end>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => `${isActive ? styles.linkDestacado : styles.link}`}
					to='/favoritos'
					end>
					Favoritos
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
