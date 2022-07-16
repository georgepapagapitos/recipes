import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './button.interface';
import './button.scss';

const Button = (props: ButtonProps) => {
  const { buttonType = 'primary', text, size = 'medium', onClick } = props;

  const buttonClasses = classNames({
    'btn': true,
    'btn--primary': buttonType === 'primary',
    'btn--secondary': buttonType === 'secondary',
    [`btn--${size}`]: true,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>{text}</button>
  );
};

export default Button;
