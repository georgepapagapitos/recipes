import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Input } from '../../components/Form';
import { Button } from '../../components';
import './addRecipe.scss';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState([]);

  const navigate = useNavigate();

  const postRecipe = async () => {
    const recipe = {
      name,
      description,
    };
    try {
      await axios.post('/api/v1/recipes', recipe);
      navigate('/recipes');
    } catch (err) {
      console.error({ message: err.message });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === '' || description.length < 1) {
      window.alert('missing input');
      return;
    }
    postRecipe();
    setName('');
    setDescription('');
  };

  return (
    <div className='add-recipe'>
      <Form>
        <Label elementId='name-input' text='name of recipe:' />
        <Input id='name-input' placeholder='enter the recipe name' value={name} onChange={(e) => setName(e.target.value)} />
        <Label elementId='description-input' text='description:' />
        <Input id='description-input' placeholder='enter the description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button text='submit' onClick={handleClick} />
      </Form>
    </div>
  )
}

export default AddRecipe