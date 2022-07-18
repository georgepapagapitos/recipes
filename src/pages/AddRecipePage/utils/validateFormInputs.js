export const validateFormInputs = (inputs) => {
  if (!inputs.name) {
    window.alert('missing recipe name');
    return false;
  }
  if (!inputs.description) {
    window.alert('missing recipe description');
    return false;
  }
  if (inputs.ingredients.length) {
    for (let ingredient of inputs.ingredients) {
      const { name, amt, unit, prep } = ingredient;
      if (name) {
        if (amt && !unit) {
          window.alert(`missing unit for amt of ${name}`);
          return false;
        }
      }
      if (!name) {
        if (amt || unit || prep) {
          window.alert(`missing name for ingredient #${ingredient.id + 1}`);
          return false;
        }
      }
    }
  }
  return true;
};
