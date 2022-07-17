import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../../context/recipes/context';
import { deleteRecipe, fetchRecipe } from '../../context/recipes/apiCalls';
import { Button, Typography } from '../../components';
import './recipePage.scss';

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
        <Typography component='h1'>{recipe.name}</Typography>
      </div>
      <div className='recipe-page--content'>
        <Typography>{recipe.description}</Typography>
        <Button text='delete recipe.' onClick={(e) => handleDelete(e, id)} />
      </div>
    </div>
  );

};

export default RecipePage;
