import React, { useState } from 'react';
import { Card, Button } from '../../components';
import { Input, Label, Form } from '../../components/Form';
import axios from 'axios';
import './home.scss';

const Home = (props) => {
  const { recipes, fetchRecipes } = props;

  const [name, setName] = useState('');

  const [description, setDescription] = useState([]);

  const postRecipe = async () => {
    const recipe = {
      name,
      description,
    };
    try {
      await axios.post('/api/v1/recipes', recipe);
      fetchRecipes();
    } catch (err) {
      console.error({ message: err.message });
    }
  };

  // const deleteRecipe = async (id) => {
  //   if (window.confirm('do you want to delete this recipe?')) {
  //     try {
  //       await axios.delete(`/api/v1/recipes/${id}`);
  //       const newRecipes = recipes.filter(recipe => recipe._id !== id);
  //       console.log(newRecipes);
  //       setRecipes(newRecipes);
  //     } catch (err) {
  //       console.error({ message: err.message });
  //     }
  //   }
  // };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === '' || description.length < 1) {
      window.alert('missing input');
      return;
    }
    postRecipe();
    setName('');
    setDescription('');
  };

  return (
    <>
      <div className='banner'>
        <Form>
          <Label elementId='name-input' text='name of recipe:' />
          <Input id='name-input' placeholder='enter the recipe name' value={name} onChange={(e) => setName(e.target.value)} />
          <Label elementId='description-input' text='description:' />
          <Input id='description-input' placeholder='enter the description' value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button text='submit' onClick={handleClick} />
        </Form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap' }}>
        {recipes.map(recipe => (
          <Card
            id={recipe._id}
            heading={recipe.name}
            image="https://picsum.photos/250/150"
            description={recipe.description}
            key={recipe._id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;