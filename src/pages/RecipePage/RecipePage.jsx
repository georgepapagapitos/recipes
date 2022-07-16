import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '../../components';
import requests from '../../utils/requests';

const RecipePage = (props) => {
  const { deleteRecipe } = props;

  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    requests.get(`/api/v1/recipes/${id}`)
      .then(res => setRecipe(res.data));
  }, [id]);

  return (
    <>
      <Typography component='h1'>{recipe.name}</Typography>
      <Typography component='p'>{recipe.description}</Typography>
      <div style={{ width: '200px', height: '200px' }}>
        <Button text='delete recipe.' onClick={(e) => deleteRecipe(e, id)} />
      </div>
    </>
  );
};

export default RecipePage;
