import React from 'react';
import { useRecoilState } from 'recoil';
import { Card, NavBar } from '../../components';
import { recipeListAtom } from '../../recoil/atoms/recipeAtom';
import './home.scss';

const links = [
  { text: 'home', to: '/' },
  { text: 'add recipes', to: '/add' },
];

const Home = () => {
  const recipes = useRecoilState(recipeListAtom);

  return (
    <>
      <NavBar links={links} />
      <div className='home'>
        {recipes && recipes.map(recipe => (
          <Card
            backgroundColor='blue'
            id={recipe.id}
            heading={recipe.name}
            image={recipe.imageUrl}
            altText={recipe.name}
            description={recipe.description}
            key={recipe.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;