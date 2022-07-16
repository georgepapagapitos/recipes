export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  payload: recipes,
});

export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  payload: recipe,
});

export const removeRecipe = (id) => ({
  type: 'REMOVE_RECIPE',
  payload: id,
});
