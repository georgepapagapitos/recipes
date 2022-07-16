import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Typography } from '..';
import { CardProps } from './card.interface';
import './card.scss';

const Card = (props: CardProps) => {
  const { heading, description, image, altText, id, backgroundColor = '' } = props;

  const navigate = useNavigate();

  const cardClasses = classNames({
    'card': true,
    [altText]: true,
  });

  const goToRecipe = (recipeId: string): void => {
    navigate(`/${recipeId}`);
  };

  const styles = { backgroundColor };

  return (
    <div className={cardClasses}>
      <div className='card--header' style={styles} onClick={() => goToRecipe(id)}>
        <Typography component='h2' className='card--header-heading'>{heading}</Typography>
        {image &&
          <img
            className='card--header-image'
            src={image}
            alt={altText}
          />
        }
      </div>
      <div className='card--content'>
        <Typography component='p'>{description}</Typography>
      </div>
      <div className='card--cta'>
        <Button text='go to recipe' onClick={() => goToRecipe(id)} />
        <Button text='add to favorites' buttonType='secondary' onClick={() => { }} />
      </div>
    </div>
  );
};

export default Card;
