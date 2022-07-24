import { InputHTMLAttributes } from 'react';

import styles from './index.module.scss';

type ICheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ id, checked }: ICheckboxProps) {
  return (
    <div>
      <div className={styles.checkbox}>
        <input type='checkbox' checked={checked} id={id} />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
}
