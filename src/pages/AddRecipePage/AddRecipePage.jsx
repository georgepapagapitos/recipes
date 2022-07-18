import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../context/recipes/context';
import { postRecipe } from '../../context/recipes/apiCalls';
import { Button, Form, Typography } from '../../components';
import Ingredients from './Ingredients';
import Details from './Details';
import './addRecipePage.scss';
import { validateFormInputs } from './utils/validateFormInputs';

const AddRecipePage = () => {
  const { dispatch } = useContext(RecipeContext);

  const navigate = useNavigate();

  const [details, setDetails] = useState(initialDetails);
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleSubmit = (e, recipe) => {
    e.preventDefault();
    if (validateFormInputs(recipe)) {
      postRecipe(dispatch, recipe);
      setDetails(initialDetails);
      setIngredients(initialIngredients);
      navigate('/');
    };
  };

  return (
    <div className='add-recipe'>
      <Typography component='h1' gutterBottom>add a recipe.</Typography>
      <Form>
        <Details details={details} setDetails={setDetails} />
        <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
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
