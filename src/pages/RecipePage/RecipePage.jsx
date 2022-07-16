import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '../../components';

const RecipePage = () => {
  const { id } = useParams();

  console.log(id);

  const recipe = { name: '', description: '' };

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
