import { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function Input({ onChangeText, ...props }: InputProps) {
  return (
    <input
      {...props}
      onChange={onChangeText}
      name='task'
      className={styles.input}
      placeholder='Adicione uma nova tarefa'
      type="text" />
  )
}
