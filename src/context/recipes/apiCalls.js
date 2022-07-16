import requests from '../../utils/requests';
import { addRecipe, removeRecipe, setRecipes } from './actions';

export const fetchRecipes = async (dispatch) => {
  try {
    const response = await requests.get('/api/v1/recipes');
    dispatch(setRecipes(response.data));
  } catch (err) {
    console.error({ message: err.message });
  }
};

export const postRecipe = async (dispatch, recipe) => {
  try {
    await requests.post('/api/v1/recipes', recipe);
    dispatch(addRecipe(recipe));
  } catch (err) {
    console.error({ message: err.message });
  }
};

export const deleteRecipe = async (dispatch, id) => {
  try {
    await requests.delete(`/api/v1/recipes/${id}`);
    dispatch(removeRecipe(id));
  } catch (err) {
    console.error({ message: err.message });
  }
};
