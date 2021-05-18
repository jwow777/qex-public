import React from 'react';
import './Crewman.css';

function Crewman({ data }) {
  const {
    name,
    position,
    quote,
    photo,
  } = data;
  return (
    <li className='crewman'>
      <img src={photo} alt={name}/>
      <h3 className='crewman__name'>{name}</h3>
      <p className='crewman__position'>{position}</p>
      <blockquote className='crewman__quote'>{quote}</blockquote>
    </li>
  );
}

export default Crewman;
