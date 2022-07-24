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

export function TodoList() {
  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <span>
          Tarefas criadas
          <small>0</small>
        </span>

        <span>
          Concluídas
          <small>0</small>
        </span>
      </div>
      <ul className={styles.todoList}>
        <li>
          <Checkbox id={'1'} name='1' />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <Trash size={14} />
        </li>

        <li>
          <Checkbox id={'2'} name='2' />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <Trash size={14} />
        </li>
        <li>
          <Checkbox id={'3'} name='3' />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <Trash size={14} />
        </li>
        <li>
          <Checkbox />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <Trash size={14} />
        </li>
      </ul>
    </div>
  );
}
