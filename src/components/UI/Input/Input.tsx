import React, { useState } from 'react';
import classNames from 'classnames';
import style from './Input.module.scss';

export interface InputProps {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className }) => {
  const [value, setValue] = useState('');
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <input
      type="number"
      className={classNames(style.input, className)}
      value={value}
      onChange={inputHandler}
    />
  );
};



export default Input;
