import React from 'react';
import { Card } from '../../components';
import './home.scss';

const Home = (props) => {
  const { recipes } = props;

  return (
    <div className='home'>
      {recipes.map(recipe => (
        <Card
          backgroundColor='blue'
          id={recipe.id}
          heading={recipe.name}
          image={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`}
          altText={recipe.name}
          description={recipe.description}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

export default Home;
