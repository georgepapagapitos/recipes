import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components';

const RecipePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({});

  const fetchRecipe = async () => {
    try {
      const recipe = await axios.get(`/api/v1/recipes/${id}`);
      setRecipe(recipe.data);
    } catch (err) {
      console.error({ message: err.message });
    };
  };

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  const deleteRecipe = async (e) => {
    e.preventDefault();
    console.log('deleting', id);
    if (window.confirm('do you want to delete this recipe?')) {
      try {
        await axios.delete(`/api/v1/recipes/${id}`).then(navigate(-1));
      } catch (err) {
        console.error({ message: err.message });
      }
    }
  };

  return (
    <>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <Button text='delete recipe.' onClick={deleteRecipe} />
    </>
  );
};

export default RecipePage;