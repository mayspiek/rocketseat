import { PlusCircle } from "phosphor-react";
import styles from './Button.module.css';

export function Button() {
  return (
    <button className={styles.button} type="submit">
      Criar
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}
