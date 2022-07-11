import React from 'react';
import classNames from 'classnames';
import './input.scss';

const Input = (props) => {
  const { placeholder, type = 'text', onChange, value, name, children } = props;

  const placeholderText = placeholder ? placeholder : children;

  const inputClasses = classNames({
    'input': true,
  })

  return (
    <input
      placeholder={placeholderText}
      type={type}
      onChange={onChange}
      value={value}
      className={inputClasses}
      name={name}
    />
  );
};

export default Input;
