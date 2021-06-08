import React from 'react';
import './Crewman.css';

function Crewman({ item }) {
  const {
    name, position, quote, photo,
  } = item;
  return (
    <li className='crewman'>
      <img src={photo} alt={name} className='crewman__image'/>
      <h3 className='crewman__name'>{name}</h3>
      <p className='crewman__position'>{position}</p>
      <blockquote className='crewman__quote'>{quote}</blockquote>
    </li>
  );
}

export default Crewman;
