import { ReactNode } from 'react';
import styles from './Button.module.css';
import { time } from 'console';
import { useTimer } from '../contexts/Timer';

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  timer?: boolean;
}

const Button = ({ children, type = 'button', timer = false }: ButtonProps) => {
  return ( 
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
 
export default Button;