import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button/Button';
import './card.scss';

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

  const styles = { backgroundColor };

  return (
    <div className={cardClasses}>
      <div className='card--header' style={styles} onClick={() => goToRecipe(id)}>
        <h2 className='card--header-heading'>{heading}</h2>
        {image &&
          <img
            className='card--header-image'
            src={image}
            alt={altText}
            />
          }
      </div>
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
