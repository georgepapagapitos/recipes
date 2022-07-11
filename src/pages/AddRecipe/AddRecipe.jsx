import React, { useState } from 'react';
import { Button } from '../../components';
import { Form, Label, Input } from '../../components/Form';
import './addRecipe.scss';

const AddRecipe = (props) => {
  const { postRecipe } = props;

  const initialInputs = { name: '', description: ''};

  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = ({ target }) => {
    const updatedInputs = {...inputs};
    updatedInputs[target.name] = target.value;
    setInputs(updatedInputs);
  };

  return (
    <div className='add-recipe'>
      <Form>
        <Label elementId='name-input' text='name of recipe:' />
        <Input id='name-input' placeholder='enter the recipe name' name='name' value={inputs.name} onChange={handleChange} />
        <Label elementId='description-input' text='description:' />
        <Input id='description-input' placeholder='enter the description' name='description' value={inputs.description} onChange={handleChange} />
        <Button text='submit' onClick={(e) => postRecipe(e, inputs)} />
      </Form>
    </div>
  )
}

export default AddRecipe
