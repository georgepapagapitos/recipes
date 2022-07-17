import React from 'react';
import { LabelProps } from './label.interface';
import './label.scss';

const Label: React.FC<LabelProps> = (props) => {
  const { elementId, text, children } = props;

  const labelText = text ? text : children;

  return (
    <label className='label' htmlFor={elementId}>{labelText}</label>
  );
};

export default Label;
