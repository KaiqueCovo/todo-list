import { ChangeEvent, createRef, FormEvent, InvalidEvent } from 'react';

import { PlusCircle } from 'phosphor-react';

import { ITask } from '../../interface';
import styles from './index.module.scss';

interface INewTaskProps {
  onAddNewTask: (task: ITask) => void;
}

export function NewTask({ onAddNewTask }: INewTaskProps) {
  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    const inputValue = inputRef.current.value;

    onAddNewTask({
      id: crypto.randomUUID(),
      content: inputValue,
      completed: false,
    });

    inputRef.current.value = '';
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>): void {
    event.target.setCustomValidity('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>): void {
    event.target.setCustomValidity('Digite uma tarefa!');
  }

  return (
    <form className={styles.newTask} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        required
        onInvalid={handleNewTaskInvalid}
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewTaskChange}
      />
      <button type='submit'>
        Criar <PlusCircle size={16} weight='bold' />
      </button>
    </form>
  );
}
