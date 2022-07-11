import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navBar.scss';

const NavBar = (props) => {
  const { links } = props;
  
  const navigate = useNavigate();

  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
  <div className='navbar' id='navbar'>
    <div className='navbar--left'>
      <h1 className='navbar--header' onClick={() => navigate('/')}>recipes.</h1>
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
