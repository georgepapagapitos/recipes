import React, { createContext, useReducer } from 'react';
import { recipeReducer } from './reducer';
import { setRecipes, setRecipe, addRecipe, removeRecipe } from './actions';

const initialState = {
  recipes: [],
  recipe: {},
};

export const RecipeContext = createContext(initialState);

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const value = {
    recipes: state.recipes,
    recipe: state.recipe,
    setRecipes,
    setRecipe,
    addRecipe,
    removeRecipe,
    dispatch,
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
