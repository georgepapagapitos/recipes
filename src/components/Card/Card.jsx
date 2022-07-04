import React from 'react';
import Button from '../Button/Button';
import './card.scss';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const Card = (props) => {
  const { heading, description, image, altText, id, backgroundColor = '' } = props;

  const navigate = useNavigate();

  const cardClasses = classNames({
    'card': true,
    [altText]: true,
  });

  const goToRecipe = (recipeId) => {
    navigate(`/${recipeId}`);
  };

  const styles = { backgroundColor: backgroundColor };

  return (
    <div className={cardClasses}>
      <Link to={`/${id}`}>
        <div className='card--header' style={styles}>
          <h2 className='card--header-heading'>{heading}</h2>
          {image &&
            <img
              className='card--header-image'
              src={image}
              alt={altText}
            />
          }
        </div>
      </Link>
      <div className='card--content'>
          <p>{description}</p>
      </div>
      <div className='card--cta'>
        <Button text='go to recipe' onClick={() => goToRecipe(id)} />
        <Button text='add to favorites' buttonType='secondary' />
      </div>
    </div>
  );
}

export default Card;