import React from 'react';
import Container from '../Container/Container';
import OurService from '../OurService/OurService';
import readyServices from '../../utils/readyservice';
import './ReadyServices.css';

function ReadyServices({ openPopup, dataService }) {
  return (
    <Container classNameSection='ready-services' title='Наши готовые сервисы'>
      <p className='ready-services__subtitle'>
        Топовые решения
        <span className='ready-services__subtitle ready-services__subtitle_light'>
          Одна из самых сильных команд на рынке в области разработки готовых
          решений.
        </span>
      </p>
      <ul className='list ready-services__list'>
        {readyServices.map((item, index) => (
          <OurService item={item} openPopup={openPopup} data={dataService} key={index} />
        ))}
      </ul>
    </Container>
  );
}

export default ReadyServices;
