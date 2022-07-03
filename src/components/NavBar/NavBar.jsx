import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => {
  return (
  <div className='navbar' id='navbar'>
    <div className='navbar--left'>
      <h1 className='navbar--header'>recipes.</h1>
    </div>
    <div className='navbar--right'>
      <Link to='/' className='navbar--right-item'>home.</Link>
      <a href='#recipes' className='navbar--right-item'>all recipes.</a>
      <a href='#random' className='navbar--right-item'>random recipe.</a>
      <a href='#favorites' className='navbar--right-item'>my favorites.</a>
    </div>
  </div>
  );
}

export default NavBar;
