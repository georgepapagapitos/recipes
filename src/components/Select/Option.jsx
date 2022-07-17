import React from 'react';

const Option = (props) => {
  const { children, value } = props;
  return (
    <option value={value}>{children}</option>
  );
};

export default Option;
