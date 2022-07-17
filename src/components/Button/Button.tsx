import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './button.interface';
import './button.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { buttonType = 'primary', text, size = 'medium', onClick, children } = props;

  const buttonClasses = classNames({
    'btn': true,
    'btn--primary': buttonType === 'primary',
    'btn--secondary': buttonType === 'secondary',
    [`btn--${size}`]: true,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children ? children : text}
    </button>
  );
};

export default Button;
