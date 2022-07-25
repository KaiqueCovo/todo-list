import { InputHTMLAttributes } from 'react';

import styles from './index.module.scss';

type ICheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ id, ...props }: ICheckboxProps) {
  return (
    <div>
      <div className={styles.checkbox}>
        <input type='checkbox' id={id} {...props} />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
}
