import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  task: string;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <input className={styles.checkbox} type="checkbox" name="task" id="task" />
        <p>
          {task}
        </p>
      </div>
      <Trash size={20} />
    </div>
  )
}
