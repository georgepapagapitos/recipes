import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { Form, Label, Input } from '../../components/Form';
import { postRecipe } from '../../context/recipes/apiCalls';
import { RecipeContext } from '../../context/recipes/context';
import './addRecipePage.scss';

const AddRecipePage = () => {
  const { dispatch } = useContext(RecipeContext);

  const navigate = useNavigate();

  const initialInputs = { name: '', description: '' };

  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = ({ target }) => {
    const updatedInputs = { ...inputs };
    updatedInputs[target.name] = target.value;
    setInputs(updatedInputs);
  };

  const handleClick = (e, recipe) => {
    e.preventDefault();
    postRecipe(dispatch, recipe);
    setInputs(initialInputs);
    navigate(-1);
  };

  return (
    <div className='add-recipe'>
      <Form>
        <Label elementId='name-input' text='name of recipe:' />
        <Input id='name-input' placeholder='enter the recipe name' name='name' value={inputs.name} onChange={handleChange} />
        <Label elementId='description-input' text='description:' />
        <Input id='description-input' placeholder='enter the description' name='description' value={inputs.description} onChange={handleChange} />
        <Button text='submit' onClick={(e) => handleClick(e, inputs)} />
      </Form>
    </div>
  );
};

export default AddRecipePage;
