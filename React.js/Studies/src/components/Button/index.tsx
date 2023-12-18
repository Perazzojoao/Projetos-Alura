import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
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