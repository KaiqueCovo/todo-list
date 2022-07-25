import { useState } from 'react';

import styles from './App.module.scss';
import { Header, NewTask, TodoList } from './components';
import { ITask } from './interface';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddNewTask(task: ITask) {
    setTasks((state) => [...state, task]);
  }

  function handleCompleteTask(id: string): void {
    const changeTaskCompletedType = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(changeTaskCompletedType);
  }

  function handleDeleteTask(id: string): void {
    const removeTaskFromList = tasks.filter((task) => task.id !== id);

    setTasks(removeTaskFromList);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onAddNewTask={handleAddNewTask} />
        <div className={styles.todoList}>
          <TodoList
            tasks={tasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
