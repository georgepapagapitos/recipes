import React from 'react';

const Label = (props) => {
  const { elementId, text, children } = props;

  const labelText = text ? text : children;

  return (
    <label htmlFor={elementId}>{labelText}</label>
  );
};

export default Label;