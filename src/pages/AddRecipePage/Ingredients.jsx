import React from 'react';
import { Button, Input, Label, Typography } from '../../components';

const Ingredients = ({ ingredients, setIngredients }) => {

  const handleChangeIndredient = ({ target }, index) => {
    const newIngredients = ingredients.map(ingredient => {
      if (ingredient.id === index) ingredient = { ...ingredient, [target.name]: target.value };
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const handleRemoveInput = (e, id) => {
    e.preventDefault();
    const newIngredients = ingredients.filter((ingredient, i) => i !== id);
    setIngredients(newIngredients);
  };

  return (
    <div className='ingredients'>
      <Typography component='h4' gutterBottom>ingredients:</Typography>
      <ul>
        {ingredients.map((ingredient, i) => {
          i += 1;
          return (
            <li key={i} className='ingredients--item'>
              <Label elementId={`ingredient-name-${i}`} text={`ingredient #${i}`} />
              <Input
                id={`ingredient-name-${i}`}
                name='name'
                placeholder='whats it called?'
                onChange={(e) => handleChangeIndredient(e, i)}
              />
              <Input
                type='number'
                id={`ingredient-amt-${i}`}
                name='amt'
                placeholder='how much?'
                onChange={(e) => handleChangeIndredient(e, i)}
              />
              <Input
                id={`ingredient-unit-${i}`}
                name='unit'
                placeholder='enter unit'
                onChange={(e) => handleChangeIndredient(e, i)}
              />
              <Input
                id={`ingredient-prep-${i}`}
                name='prep'
                placeholder='prep? (ex. chopped, minced, diced, etc.)'
                onChange={(e) => handleChangeIndredient(e, i)}
              />
              <Button text='X' gutterBottom onClick={(e) => handleRemoveInput(e, i)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
