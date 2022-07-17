import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../context/recipes/context';
import { postRecipe } from '../../context/recipes/apiCalls';
import { Button, Form, Label, Input, Typography, Textarea } from '../../components';
import IngredientsForm from './IngredientsForm';
import './addRecipePage.scss';

const AddRecipePage = () => {
  const { dispatch } = useContext(RecipeContext);

  const navigate = useNavigate();

  const [details, setDetails] = useState(initialDetails);
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleChangeDetail = ({ target }) => {
    const updatedDetails = { ...details };
    updatedDetails[target.name] = target.value;
    setDetails(updatedDetails);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { id: ingredients.length, name: '', amt: '', unit: '', prep: '' }]);
  };

  const removeEmptyIngredients = (ingredientsArray) => {
    for (let ingredient in ingredientsArray) {
      console.log(ingredient);
    }
  };

  const handleSubmit = (e, recipe) => {
    e.preventDefault();
    if (!recipe.name) {
      return;
    }
    removeEmptyIngredients(ingredients);
    postRecipe(dispatch, recipe);
    setDetails(initialDetails);
    setIngredients(initialIngredients);
    navigate('/');

  };

  return (
    <div className='add-recipe'>
      <Typography component='h1' gutterBottom>add a recipe.</Typography>
      <div className='details'>
        <Form>
          <Typography component='h2' gutterBottom>details:</Typography>
          <Label elementId='name-input' text='name of recipe:' />
          <Input id='name-input' placeholder='enter the recipe name' name='name' value={details.name} onChange={handleChangeDetail} />
          <Label elementId='description-input' text='description:' />
          <Textarea id='description-input' placeholder='enter the description' name='description' value={details.description} onChange={handleChangeDetail} />
          <Typography component='h2' gutterBottom>ingredients:</Typography>
          <IngredientsForm ingredients={ingredients} setIngredients={setIngredients} />
          <Button text='add ingredient' onClick={handleAddInput} />
          <Button
            text='submit'
            onClick={(e) => handleSubmit(e, {
              name: details.name,
              description: details.description,
              ingredients,
            })}
          />
        </Form>
      </div>
    </div>
  );
};

export default AddRecipePage;

const initialIngredients = [{ id: 0, name: '', amt: '', unit: '', prep: '' }, { id: 1, name: '', amt: '', unit: '', prep: '' }, { id: 2, name: '', amt: '', unit: '', prep: '' }];

const initialDetails = { name: '', description: '' };
