import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Typography from '../Typography/Typography';
import { NavBarProps } from './navBar.interface';
import './navBar.scss';

const NavBar = (props: NavBarProps) => {
  const { links } = props;

  const navigate = useNavigate();

  const setActiveLinkStyle = (isActive: boolean) => {
    if (isActive) {
      return (
        { textDecoration: 'underline' }
      );
    } else {
      return {};
    };
  };

  return (
    <div className='navbar' id='navbar'>
      <div className='navbar--left'>
        <Typography component='h1' className='navbar--header' onClick={() => navigate('/')}>recipes.</Typography>
      </div>
      <div className='navbar--right'>
        {links.map(link => (
          <NavLink
            to={link.to}
            key={link.text}
            className='navbar--right-item'
            style={({ isActive }) => setActiveLinkStyle(isActive)}
          >
            {link.text + '.'}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
