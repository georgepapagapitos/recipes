import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '../../components';
import { fetchRecipe } from '../../context/recipes/apiCalls';
import { RecipeContext } from '../../context/recipes/context';

const RecipePage = () => {
  const { id } = useParams();

  const { recipe, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipe(dispatch, id);
  }, [id]);

  return (
    <>
      <Typography component='h1'>{recipe.name}</Typography>
      <Typography component='p'>{recipe.description}</Typography>
      <div style={{ width: '200px', height: '200px' }}>
        <Button text='delete recipe.' />
      </div>
    </>
  );

};

export default RecipePage;
