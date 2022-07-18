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
  }, [recipes]);

  return (
    <div className='home'>
      {recipes.map(recipe => (
        <Card
          id={recipe.id}
          heading={recipe.name}
          content={recipe.description}
          altText={recipe.name}
          description={recipe.description}
          key={recipe.name}
        />
      ))}
    </div>
  );
};

export default HomePage;
