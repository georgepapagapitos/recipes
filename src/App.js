import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AddRecipe, Home, RecipePage } from './pages';
import { NavBar } from './components';
import requests from './utils/requests';
import './styles/global.scss';

const App = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    requests.get('/api/v1/recipes')
      .then(res => setRecipes(res.data));
  }, []);

  const postRecipe = (e, recipeToPost) => {
    e.preventDefault();
    requests.post('/api/v1/recipes', recipeToPost);
    setRecipes([...recipes, recipeToPost])
    navigate(-1);
  };

  const deleteRecipe = (e, recipeID) => {
    if (window.confirm('u sure?')) {
      e.preventDefault();
      requests.delete(`/api/v1/recipes/${recipeID}`);
      const newRecipeArray = recipes.filter(recipe => recipe.id !== recipeID);
      setRecipes(newRecipeArray);
      navigate(-1);
    }
  };

  return (
    <>
      <NavBar links={links} />
      <Routes>
        <Route element={<Home recipes={recipes} />} path='/' />
        <Route element={<RecipePage deleteRecipe={deleteRecipe} />} path='/:id' />
        <Route element={<AddRecipe postRecipe={postRecipe} />} path='/add' />
      </Routes>
    </>
  )
};

export default App;

const links = [
  { text: 'home', to: '/' },
  { text: 'add recipe', to: '/add' },
];
