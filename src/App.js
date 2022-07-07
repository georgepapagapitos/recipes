import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages';
import './styles/global.scss';

const recipes = [
  { name: 'falafel', description: 'good stuff', id: 1 }
]

const App = () => (
  <BrowserRouter>
    <Suspense>
      <Routes>
        <Route element={<Home recipes={recipes} />} path="/*" />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
