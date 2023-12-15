import { ReactElement } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactElement | string
  type?: 'submit' | undefined;
}

const Button = ({ children, type = undefined }: ButtonProps) => {
  return ( 
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
 
export default Button;