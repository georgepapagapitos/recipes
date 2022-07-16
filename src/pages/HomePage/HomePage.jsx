import React, { useEffect, useContext } from 'react';
import { RecipeContext } from '../../context/recipes/context';
import { setRecipe } from '../../context/recipes/actions';
import { fetchRecipes } from '../../context/recipes/apiCalls';
import { Card } from '../../components';
import './homePage.scss';

const HomePage = () => {
  const { recipes, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipes(dispatch);
    dispatch(setRecipe({}));
  }, []);

  return (
    <div className='home'>
      {recipes.map(recipe => (
        <Card
          backgroundColor='blue'
          id={recipe.id}
          heading={recipe.name}
          altText={recipe.name}
          description={recipe.description}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

export default HomePage;
