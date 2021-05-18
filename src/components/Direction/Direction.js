import React from 'react';
import './Direction.css';
import clockImage from '../../images/icons/clock.svg';
import priceImage from '../../images/icons/price.png';

function Direction({ data }) {
  const {
    image,
    title,
    description,
    time,
    price,
  } = data;
  return (
    <li className='direction'>
      <img src={image} alt={title} className='direction__image' />
      <h4 className='direction__title'>{title}</h4>
      <p className='direction__text'>{description}</p>
      <div className='direction__block'>
        <span className='direction__block-text'>
          От {time} <img src={clockImage} alt='time' />
        </span>
        <span className='direction__block-text'>
          От {price} <img src={priceImage} alt='price' />
        </span>
      </div>
    </li>
  );
}

export default Direction;
