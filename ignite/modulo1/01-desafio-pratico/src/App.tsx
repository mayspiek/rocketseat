import { Header } from "./components/Header"
import './globals.css';
import styles from './App.module.css';
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <form className={styles.form} action="">
          <Input />
          <Button />
        </form>

        <div className={styles.tasksContainer}>
          <div className={styles.tasksContainerTitle}>
            <p className={styles.createdTaksText}>
              Tarefas criadas
              <span>
                5
              </span>
            </p>

            <p className={styles.completedTasksText}>
              Concluídas
              <span>
                2 de 5
              </span>
            </p>
          </div>
          <Task />
        </div>
      </main>
    </div>
  )
}

export default App
