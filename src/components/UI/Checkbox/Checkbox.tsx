import React from 'react';
import classNames from 'classnames';
import style from './Checkbox.module.scss';

export interface CheckboxProps {
  name: string;
  checked: boolean;
  className?: string;
  onChange(checked: boolean): void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checked = false,
  className,
  onChange,
  children,
}) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // if (disabled) return;
    onChange?.(target.checked);
  };
  return (
    <div className={classNames(style.wrapper, className)}>
      <input
        onChange={handleChange}
        className={style.checkbox}
        type="checkbox"
        checked={checked}
        id={name}
      />
      {children && <label htmlFor={name}>
        {/* <Text className={style.content} type="text-regular"> */}
        {children}
        {/* </Text> */}
      </label>}
    </div>
  );
};

export default Checkbox;
