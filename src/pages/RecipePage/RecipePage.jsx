import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../../context/recipes/context';
import { deleteRecipe, fetchRecipe } from '../../context/recipes/apiCalls';
import { Button, Typography } from '../../components';

const RecipePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { recipe, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipe(dispatch, id);
  }, [id]);

  const handleDelete = (recipeId) => {
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
        <Button text='delete recipe.' onClick={() => handleDelete(id)} />
      </div>
    </>
  );

};

export default RecipePage;
