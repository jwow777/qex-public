import React from 'react';
import './ReadyServices.css';
import readyServices from '../../utils/readyservice';
import OurService from '../OurService/OurService';

function ReadyServices({ openPopup, dataService }) {
  return (
    <section className='ready-services'>
      <div className='ready-services__container'>
        <h2 className='title ready-services__title'>Наши готовые сервисы</h2>
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
      </div>
    </section>
  );
}

export default ReadyServices;
