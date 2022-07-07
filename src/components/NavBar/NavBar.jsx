import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss';

const NavBar = (props) => {

  const { links } = props;

  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
  <div className='navbar' id='navbar'>
    <div className='navbar--left'>
      <h1 className='navbar--header'>recipes.</h1>
    </div>
    <div className='navbar--right'>
      {links.map(link => (
        <NavLink to={link.to} key={link.text} className='navbar--right-item' style={({isActive}) => isActive ? activeStyle : undefined}>{link.text + '.'}</NavLink>
      ))}
    </div>
  </div>
  );
}

export default NavBar;
