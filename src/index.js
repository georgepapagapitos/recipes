import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RecipeProvider } from './context/recipes/context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </BrowserRouter>
);
