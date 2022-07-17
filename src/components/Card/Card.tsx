import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Typography } from '..';
import { CardProps } from './card.interface';
import './card.scss';

const Card = (props: CardProps) => {
  const { heading, content, image, altText, id, backgroundColor = '' } = props;

  const navigate = useNavigate();

  const cardClasses = classNames({
    'card': true,
  });

  const goToRecipe = (recipeId: string): void => {
    navigate(`/${recipeId}`);
  };

  const styles = { backgroundColor };

  return (
    <div className={cardClasses}>
      <div className='card--header' style={styles} onClick={() => goToRecipe(id)}>
        {heading && <Typography component='h1' variant='h5' className='card--header-heading'>{heading}</Typography>}
        {image &&
          <img
            className='card--header-image'
            src={image}
            alt={altText}
          />
        }
      </div>
      <div className='card--content'>
        <Typography component='p'>{content}</Typography>
      </div>
      <div className='card--cta'>
        <Button text='delete' buttonType='secondary' onClick={() => { }} />
        <Button text='go to recipe' onClick={() => goToRecipe(id)} />
      </div>
    </div>
  );
};

export default Card;
