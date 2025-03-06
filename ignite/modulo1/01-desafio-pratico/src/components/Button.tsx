import { PlusCircle } from "phosphor-react";
import styles from './Button.module.css';
import { ButtonHTMLAttributes } from "react";

export function Button({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={styles.button}>
      Criar
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}
