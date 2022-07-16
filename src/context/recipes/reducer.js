export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: payload,
      };
    case 'ADD_RECIPE':
      return {
        recipes: [
          ...state.recipes,
          payload,
        ]
      };
    case 'REMOVE_RECIPE': {
      const filteredRecipes = state.recipes.filter(
        (recipe) => recipe.id !== payload
      );
      return {
        recipes: filteredRecipes,
      };
    }
    default:
      throw new Error(`unknown dispatch type: ${type}`);
  }
};
