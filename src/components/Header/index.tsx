import todoLogo from '../../assets/todo-logo.svg';
import { NewTask } from '../index';
import styles from './index.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Logo' />
      <div className={styles.task}>
        <NewTask />
      </div>
    </header>
  );
}
