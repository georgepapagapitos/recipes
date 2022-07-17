import React from 'react';
import classNames from 'classnames';
import './input.scss';
import { InputProps } from './input.interface';

const Input: React.FC<InputProps> = (props) => {
  const { placeholder, type = 'text', onChange, value, name } = props;

  const inputClasses = classNames({
    'input': true,
  });

  return (
    <input
      autoComplete='off'
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      className={inputClasses}
      name={name} />
  );
};

export default Input;
