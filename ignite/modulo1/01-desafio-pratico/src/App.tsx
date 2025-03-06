import { Header } from "./components/Header"
import './globals.css';
import styles from './App.module.css';
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Notepad } from "phosphor-react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const tasksLength = tasks.length;

  const isNewTaskEmpty = newTask.length === 0;

  function handleEmptyInput(event: InvalidEvent<HTMLInputElement>) {
    console.log('oi')
    event.target.setCustomValidity('Você não pode adicionar uma tarefa vazia');
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.currentTarget.value);
  }

  function handleRemoveTask(task: string) {
    setTasks(tasks.filter(t => t !== task));
  }

  function handleCompleteTask() {
    const tasksOk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    setTasksCompleted(tasksOk);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <form onSubmit={handleAddTask} className={styles.form} action="">
          <Input
            required
            value={newTask}
            spellCheck={false}
            name="newTask"
            onInvalid={handleEmptyInput}
            onChangeText={handleNewTaskChange} />
          <Button disabled={isNewTaskEmpty} />
        </form>

        <div className={styles.tasksContainer}>
          <div className={styles.tasksContainerTitle}>
            <p className={styles.createdTaksText}>
              Tarefas criadas
              <span>
                {tasksLength}
              </span>
            </p>

            <p className={styles.completedTasksText}>
              Concluídas
              <span>
                {tasksCompleted} de {tasksLength}
              </span>
            </p>
          </div>
          {tasks.length > 0 ? tasks.map((task, index) => (
            <Task
              onCompleteTask={handleCompleteTask}
              onDeleteTask={handleRemoveTask}
              key={index}
              task={task} />
          )) :
            <div className={styles.noTasksFound}>
              <Notepad size={32} />
              <p>
                <span>
                  Você ainda não tem tarefas cadastradas
                </span>
              </p>
              <p>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          }
        </div>
      </main>
    </div>
  )
}

export default App
