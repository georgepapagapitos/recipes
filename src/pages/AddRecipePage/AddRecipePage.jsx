import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../context/recipes/context';
import { postRecipe } from '../../context/recipes/apiCalls';
import { Button, Form, Typography } from '../../components';
import Ingredients from './Ingredients';
import Details from './Details';
import './addRecipePage.scss';

const AddRecipePage = () => {
  const { dispatch } = useContext(RecipeContext);

  const navigate = useNavigate();

  const [details, setDetails] = useState(initialDetails);
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleAddInput = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { id: ingredients.length, name: '', amt: '', unit: '', prep: '' }]);
  };

  const validateFormInputs = (inputs) => {
    if (!inputs.name) {
      window.alert('missing recipe name');
      return false;
    }
    if (!inputs.description) {
      window.alert('missing recipe description');
      return false;
    }
    if (inputs.ingredients.length) {
      for (let ingredient of inputs.ingredients) {
        if (ingredient.name) {
          if (!ingredient.amt || !ingredient.unit || !ingredient.prep) {
            window.alert(`missing amt, unit, or prep of ingredient: ${ingredient.name}`);
            return false;
          }
        }
      }
    }
    return true;
  };

  const handleSubmit = (e, recipe) => {
    e.preventDefault();
    if (validateFormInputs(recipe)) {
      postRecipe(dispatch, recipe);
      if (window.confirm('do u want to add another recipe?')) {
        setDetails(initialDetails);
        setIngredients(initialIngredients);
      } else {
        navigate('/');
      }
    };
  };

  return (
    <div className='add-recipe'>
      <Typography component='h1' gutterBottom>add a recipe.</Typography>
      <Form>
        <Details details={details} setDetails={setDetails} />
        <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
        <Button text='add ingredient' onClick={handleAddInput} gutterBottom />
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
  );
};

export default AddRecipePage;

const initialIngredients = [{ id: 0, name: '', amt: '', unit: '', prep: '' }, { id: 1, name: '', amt: '', unit: '', prep: '' }, { id: 2, name: '', amt: '', unit: '', prep: '' }];

const initialDetails = { name: '', description: '' };
