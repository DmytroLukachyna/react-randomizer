import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss';

export interface ButtonProps {
  className?: string,
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => (
  <button className={classNames(style.button, className)} type='button' onClick={onClick}>{children}</button>
);

export default Button;
