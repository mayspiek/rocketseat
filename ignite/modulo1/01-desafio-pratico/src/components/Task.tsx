import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <input className={styles.checkbox} type="checkbox" name="task" id="task" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </div>
      <Trash size={20} />
    </div>
  )
}
