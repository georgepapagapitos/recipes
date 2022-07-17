import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './button.interface';
import './button.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { buttonType = 'primary', text, size = 'medium', onClick, gutterBottom, children } = props;

  const buttonClasses = classNames({
    'btn': true,
    'btn--primary': buttonType === 'primary',
    'btn--secondary': buttonType === 'secondary',
    [`btn--${size}`]: true,
    'gutter-bottom': gutterBottom,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children ? children : text}
    </button>
  );
};

Button.defaultProps = {
  buttonType: 'primary',
  size: 'medium',
};

export default Button;
