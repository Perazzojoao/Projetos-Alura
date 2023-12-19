import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

const Button = ({ children, type = 'button', onClick }: ButtonProps) => {
  return ( 
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
}
 
export default Button;