import React from 'react';
import './Whoelse.css';

function WhoElse({ item }) {
  const { position, description, image } = item;
  return (
    <li className='whoelse'>
      <img src={image} alt={position} className='whoelse__image'/>
      <h3 className='whoelse__position'>{position}</h3>
      <p className='whoelse__description'>{description}</p>
    </li>
  );
}

export default WhoElse;
