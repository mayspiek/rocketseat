import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { HTMLAttributes } from 'react';

interface TaskProps extends HTMLAttributes<HTMLDivElement> {
  task: string;
  onDeleteTask: (task: string) => void;
  onCompleteTask: () => void;
}


export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCompleteTask() {
    onCompleteTask();
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <input
          onClick={handleCompleteTask}
          className={styles.checkbox}
          type="checkbox"
          name="createdTask"
          id="task" />
        <p>
          {task}
        </p>
      </div>
      <button onClick={handleDeleteTask} title='Deletar tarefa'>
        <Trash size={20} />
      </button>
    </div>
  )
}
