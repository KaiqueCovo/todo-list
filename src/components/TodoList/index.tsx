import { useMemo, useState } from 'react';

import { Trash } from 'phosphor-react';

import clipboard from '../../assets/clipboard.png';
import { Checkbox } from '../Checkbox';
import styles from './index.module.scss';

function EmptyList() {
  return (
    <div className={styles.emptyTodoList}>
      <img src={clipboard} alt='Clipboard' />
      <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br /> Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  );
}

interface ITask {
  id: string;
  content: string;
  completed: boolean;
}

export function TodoList() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      content: 'IHAA 1',
      completed: false,
    },
    {
      id: '2',
      content: 'IHAA 2',
      completed: false,
    },
    {
      id: '3',
      content: 'IHAA 3',
      completed: false,
    },
  ]);

  const completedTasks: number = useMemo(
    () => tasks.reduce((acc, task) => (task.completed ? acc + 1 : acc), 0),
    [tasks],
  );

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
    <div className={styles.tasks}>
      <div className={styles.header}>
        <span>
          Tarefas criadas
          <small>{tasks.length}</small>
        </span>

        <span>
          Concluídas
          <small>{completedTasks}</small>
        </span>
      </div>
      <ul className={styles.todoList}>
        {!tasks.length && <EmptyList />}

        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox
              id={task.id}
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            <p>{task.content}</p>
            <Trash size={14} onClick={() => handleDeleteTask(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
