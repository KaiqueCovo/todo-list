import { PlusCircle } from 'phosphor-react';

import styles from './index.module.scss';

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input placeholder='Adicione uma nova tarefa' />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
