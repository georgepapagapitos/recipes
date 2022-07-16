import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddRecipePage, HomePage, RecipePage } from './pages';
import { NavBar } from './components';

import './styles/global.scss';


const App = () => {
  return (
    <>
      <NavBar links={links} />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<RecipePage />} path='/:id' />
        <Route element={<AddRecipePage />} path='/add' />
      </Routes>
    </>
  );
};

export default App;

const links = [
  { text: 'home', to: '/' },
  { text: 'add recipe', to: '/add' },
];
