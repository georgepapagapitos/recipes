import React, { useState } from 'react';
import { Button } from '../../components';
import { Form, Label, Input } from '../../components/Form';
import './addRecipe.scss';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='add-recipe'>
      <Form>
        <Label elementId='name-input' text='name of recipe:' />
        <Input id='name-input' placeholder='enter the recipe name' value={name} onChange={(e) => setName(e.target.value)} />
        <Label elementId='description-input' text='description:' />
        <Input id='description-input' placeholder='enter the description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button text='submit' />
      </Form>
    </div>
  )
}

export default AddRecipe