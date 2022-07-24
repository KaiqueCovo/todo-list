import clipboard from '../../assets/clipboard.png';
import styles from './index.module.scss';

export function Tasks() {
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
      <div className={styles.emptyList}>
        <img src={clipboard} alt='Clipboard' />
        <span>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <br /> Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  );
}
