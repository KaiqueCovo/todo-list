import { ChangeEvent, createRef, FormEvent, InvalidEvent } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './index.module.scss';

export function NewTask() {
  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    const inputValue = inputRef.current.value;

    console.log(inputValue);

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
