import { useMemo } from 'react';

import { Trash } from 'phosphor-react';

import clipboard from '../../assets/clipboard.png';
import { ITask } from '../../interface';
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

interface ITodoList {
  tasks: ITask[];
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoList({ tasks, onCompleteTask, onDeleteTask }: ITodoList) {
  const completedTasks: number = useMemo(
    () => tasks.reduce((acc, task) => (task.completed ? acc + 1 : acc), 0),
    [tasks],
  );

  const totalTasks = tasks.length;

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <span>
          Tarefas criadas
          <small>{totalTasks}</small>
        </span>

        <span>
          Concluídas
          <small>{`${completedTasks} de ${totalTasks}`}</small>
        </span>
      </div>
      <ul className={styles.todoList}>
        {!tasks.length && <EmptyList />}

        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox
              id={task.id}
              checked={task.completed}
              onChange={() => onCompleteTask(task.id)}
            />
            <p className={task.completed ? styles.taskCompleted : ''}>
              {task.content}
            </p>
            <Trash size={14} onClick={() => onDeleteTask(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
