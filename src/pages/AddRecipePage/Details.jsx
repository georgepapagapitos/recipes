import React from 'react';
import { Label, Input, Typography, Textarea } from '../../components';

const Details = (props) => {
  const { details, setDetails } = props;

  const handleChangeDetail = ({ target }) => {
    const updatedDetails = { ...details };
    updatedDetails[target.name] = target.value;
    setDetails(updatedDetails);
  };

  return (
    <div className='details'>
      <Typography component='h4' gutterBottom>details:</Typography>
      <Label elementId='name-input' text='name of recipe:' />
      <Input id='name-input' placeholder='enter the recipe name' name='name' value={details.name} onChange={handleChangeDetail} />
      <Label elementId='description-input' text='description:' />
      <Textarea
        id='description-input'
        placeholder='enter the description'
        name='description'
        value={details.description}
        onChange={handleChangeDetail} />
    </div>
  );
};

export default Details;
