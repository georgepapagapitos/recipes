import React, { createContext, useReducer } from 'react';
import { recipeReducer } from './reducer';
import { setRecipes, addRecipe, removeRecipe } from './actions';

const initialState = {
  recipes: [],
};

export const RecipeContext = createContext(initialState);

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const value = {
    recipes: state.recipes,
    setRecipes,
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
