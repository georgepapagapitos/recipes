import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../../context/recipes/context';
import { deleteRecipe, fetchRecipe } from '../../context/recipes/apiCalls';
import { Button, Typography } from '../../components';
import './recipePage.scss';
import IngredientTable from './IngredientTable';

const RecipePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { recipe, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipe(dispatch, id);
  }, [id]);

  const handleDelete = (e, recipeId) => {
    e.preventDefault();
    if (window.confirm('u sure u wanna delete this recipe?')) {
      deleteRecipe(dispatch, recipeId);
      navigate('/');
    }
  };

  return (
    <div className='recipe-page'>
      <div className='recipe-page--header'>
        <Typography component='h1' gutterBottom>{recipe.name}</Typography>
      </div>
      <div className='recipe-page--content'>
        <Typography gutterBottom>{recipe.description}</Typography>
        <IngredientTable ingredients={recipe.ingredients} />
        <Button text='delete recipe.' onClick={(e) => handleDelete(e, id)} />
        <Typography>
          <a target='_blank' rel='noopener noreferrer' href={`https://www.allrecipes.com/search/results/?search=${recipe.name}`}>search for recipes</a>
        </Typography>
      </div>
    </div >
  );

};

export default RecipePage;
