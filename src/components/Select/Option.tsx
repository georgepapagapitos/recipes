import React from 'react';
import { OptionProps } from './opton.interface';

const Option: React.FC<OptionProps> = (props) => {
  const { children, value } = props;
  return (
    <option value={value}>{children}</option>
  );
};

export default Option;
