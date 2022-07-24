import styles from './App.module.scss';
import { Header, NewTask, TodoList } from './components';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <div className={styles.todoList}>
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
