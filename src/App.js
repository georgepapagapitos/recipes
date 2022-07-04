import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Home, Login, Register, RecipePage } from './pages';
import { NavBar } from './components';
import AddRecipe from './pages/AddRecipe/AddRecipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const recipes = await axios.get('/api/v1/recipes');
      setRecipes(recipes.data);
    } catch (err) {
      console.error({ message: err.message });
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  const links = [
    { text: 'home.', to: '/recipes' },
    { text: 'add a recipe.', to: '/recipes/add' }
  ];

  return (
    <BrowserRouter>
      <NavBar links={links} />
      <Routes>
        <Route index path='/recipes' element={<Home recipes={recipes} />} />
        <Route path='/recipes/:id' element={<RecipePage />} />
        <Route path='/recipes/add' element={<AddRecipe />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
