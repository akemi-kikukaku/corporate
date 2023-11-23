import React, { ChangeEvent } from 'react';
import styles from 'styles/modules/TextField.module.scss';

interface Props {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = (props) => {
  return (
    <div className={styles.textFieldWrap}>
      <span className={styles.label}>{props.label}</span>
      <input
        className={styles.input}
        type='text'
        value={props.value}
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
};

export default TextField;
