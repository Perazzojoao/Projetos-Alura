import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
		</footer>
	);
};

export default Footer;
