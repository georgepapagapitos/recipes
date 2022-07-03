import classNames from 'classnames';
import React from 'react';
import './button.scss';

const Button = (props) => {
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
}

export default Button;