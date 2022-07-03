import React from 'react';
import classNames from 'classnames';
import './form.scss';

const Form = (props) => {
  const { children, alignment = 'vertical' } = props;

  const formClasses = classNames({
    'form': true,
    'form--horizontal': alignment === 'horizontal',
  });

  return (
    <form className={formClasses}>
      {children}
    </form>
  );
};

export default Form;