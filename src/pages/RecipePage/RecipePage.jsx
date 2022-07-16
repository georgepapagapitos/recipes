import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography } from '../../components';
import { deleteRecipe, fetchRecipe } from '../../context/recipes/apiCalls';
import { RecipeContext } from '../../context/recipes/context';

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
    <>
      <Typography component='h1'>{recipe.name}</Typography>
      <Typography component='p'>{recipe.description}</Typography>
      <div style={{ width: '200px', height: '200px' }}>
        <Button text='delete recipe.' onClick={(e) => handleDelete(e, id)} />
      </div>
    </>
  );

};

export default RecipePage;
