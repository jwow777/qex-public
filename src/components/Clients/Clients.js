import React from 'react';
import Container from '../Container/Container';
import client from '../../utils/client';
import './Clients.css';

function Clients() {
  return (
    <Container classNameSection='clients' title='Нам доверяют'>
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
    </Container>
  );
}

export default Clients;
