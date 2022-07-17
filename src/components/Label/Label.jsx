import React from 'react';
import './label.scss';

const Label = (props) => {
  const { elementId, text, children } = props;

  const labelText = text ? text : children;

  return (
    <label className='label' htmlFor={elementId}>{labelText}</label>
  );
};

export default Label;
