import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {

  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  const fetchRecipe = async (recipeId) => {
    try {
      const recipe = await axios.get(`/api/v1/recipes/${recipeId}`);
      setRecipe(recipe.data);
    } catch (err) {
      console.error({ message: err.message });
    };
  };

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  console.log(recipe);

  return (
    <>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </>
  );
};

export default RecipePage;