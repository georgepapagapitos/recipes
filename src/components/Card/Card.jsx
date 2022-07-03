import React from 'react';
import Button from '../Button/Button';
import './card.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { heading, description, image, altText, id } = props;

  return (
    <div className='card'>
      <Link to={`/${id}`}>
        <div className='card--header'>
          <h2 className='card--header-heading'>{heading}</h2>
          <img
            className='card--header-image'
            src={image}
            alt={altText}
          />
        </div>
      </Link>
      <div className='card--content'>
          <p>{description}</p>
      </div>
      <div className='card--cta'>
        <Button text='go to recipe' />
        <Button text='add to favorites' buttonType='secondary' />
      </div>
    </div>
  );
}

export default Card;