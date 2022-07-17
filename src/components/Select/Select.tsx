import React from 'react';
import { SelectProps } from './select.interface';

const Select: React.FC<SelectProps> = (props) => {
  const { children, name, id } = props;

  return (
    <select name={name} id={id}>
      {children}
    </select>
  );
};

export default Select;
