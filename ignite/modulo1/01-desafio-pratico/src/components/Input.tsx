import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText: (value: string) => void;
}

export function Input({ onChangeText }: InputProps) {
  return (
    <input
      onChange={(e) => onChangeText(e.target.value)}
      name='task'
      className={styles.input}
      placeholder='Adicione uma nova tarefa'
      type="text" />
  )
}
