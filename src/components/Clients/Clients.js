import React from 'react';
import './Clients.css';
import client from '../../utils/client';

function Clients() {
  return (
    <section className='clients'>
      <div className='clients__container'>
        <h2 className='title clients__title'>Нам доверяют</h2>
        <ul className='list clients__list'>
          {client.map((item, index) => (
            <img
              src={item.link}
              alt={item.title}
              key={index}
              className='clients__image'
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clients;
