import React from 'react';
import { Button, Input, Label, Typography } from '../../components';

const Ingredients = ({ ingredients, setIngredients }) => {

  const handleChangeIngredient = ({ target }, index) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (ingredient.id === index) {
        ingredient = { ...ingredient, [target.name]: target.value };
      };
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, {
      id: ingredients.length ? ingredients[ingredients.length - 1].id + 1 : 0,
      name: '',
      amt: '',
      unit: '',
      prep: ''
    }]);
  };

  const handleRemoveInput = (e, id) => {
    e.preventDefault();
    const newIngredients = ingredients.filter(ingredient => ingredient.id !== id);
    setIngredients(newIngredients);
  };

  return (
    <div className='ingredients'>
      <Typography component='h4' gutterBottom>ingredients:</Typography>
      <ul>
        {ingredients.map(i => {
          return (
            <li key={i.id} className='ingredients--item' id={`ingredient-${i.id}`}>
              <Label elementId={`ingredient-name-${i}`} text='ingredient:' />
              <Input
                id={`ingredient-name-${i}`}
                name='name'
                placeholder='whats it called?'
                onChange={(e) => handleChangeIngredient(e, i.id)}
              />
              <Input
                type='number'
                id={`ingredient-amt-${i}`}
                name='amt'
                placeholder='how much?'
                onChange={(e) => handleChangeIngredient(e, i.id)}
              />
              <Input
                id={`ingredient-unit-${i}`}
                name='unit'
                placeholder='enter unit'
                onChange={(e) => handleChangeIngredient(e, i.id)}
              />
              <Input
                id={`ingredient-prep-${i}`}
                name='prep'
                placeholder='prep? (ex. chopped, minced, diced, etc.)'
                onChange={(e) => handleChangeIngredient(e, i)}
              />
              <Button text='X' gutterBottom onClick={(e) => handleRemoveInput(e, i.id)} />
            </li>
          );
        })}
      </ul>
      <Button text='add ingredient' onClick={handleAddInput} />
    </div>
  );
};

export default Ingredients;
