import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home/Home.jsx';
import RecipePage from './pages/RecipePage/RecipePage.jsx';
import { NavBar } from './components';

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

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home recipes={recipes} fetchRecipes={fetchRecipes} />} />
        <Route path='/:id' element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
