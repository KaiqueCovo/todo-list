import styles from './App.module.scss';
import { Header, NewTask, Tasks } from './components';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <div className={styles.tasksList}>
          <Tasks />
        </div>
      </main>
    </div>
  );
}

export default App;
