import React from 'react';
import classNames from 'classnames';
import './form.scss';
import { FormProps } from './form.interface';

const Form: React.FC<FormProps> = (props) => {
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

Form.defaultProps = {
  alignment: 'vertical',
};

export default Form;
