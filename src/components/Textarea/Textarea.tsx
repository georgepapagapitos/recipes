import React from 'react';
import { TextareaProps } from './textarea.interface';
import './textarea.scss';

const Textarea: React.FC<TextareaProps> = (props) => {
  const { id, name, value, onChange } = props;

  return (
    <textarea
      className='textarea'
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
