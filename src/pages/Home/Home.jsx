import React from 'react';
import { Card } from '../../components';
import './home.scss';

const Home = (props) => {
  const { recipes } = props;

  return (
      <div className='home'>
        {recipes.map(recipe => (
          <Card
            backgroundColor='green'
            id={recipe._id}
            heading={recipe.name}
            image={recipe.imageUrl}
            altText={recipe.name}
            description={recipe.description}
            key={recipe._id}
          />
        ))}
      </div>
  );
};

export default Home;