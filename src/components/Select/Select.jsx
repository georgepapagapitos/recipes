import React from 'react';

const Select = (props) => {
  const { children, name, id } = props;

  return (
    <select name={name} id={id}>
      {children}
    </select>
  );
};

export default Select;
