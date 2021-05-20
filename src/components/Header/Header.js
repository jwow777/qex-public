import React from 'react';
import { Button } from '@material-ui/core';
import './Header.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

import background from '../../images/header/bg.jpg';
import crew from '../../images/header/crew.jpg';
import easyinterface from '../../images/header/interface.jpg';
import business from '../../images/header/business.jpg';

function Header({ onFeedback }) {
  return (
    <header
      className='header'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='header__container'>
        <HeaderMenu/>
        <div className='header__content header__content_middle'>
          <h1 className='header__title'>
            Разработка готовых решений автоматизации
          </h1>
          <h2 className='header__subtitle'>
            Разрабатываем и внедряем софт для автоматизации бизнес-процессов
          </h2>
          <Button
            variant='contained'
            color='primary'
            className='header__button_test'
            onClick={onFeedback}
          >
            Заявка на разработку
          </Button>
        </div>
      </div>
      <ul className='list header__list'>
        <li className='header__item'>
          <img src={crew} alt='интерфейс' className='header__list-image' />
          <p className='header__item-text'>
            Всегда удобный
            <span className='header__important'> интерфейс</span>
          </p>
        </li>
        <li className='header__item'>
          <img
            src={easyinterface}
            alt='команда'
            className='header__list-image'
          />
          <p className='header__item-text'>
            Ваша команда cможет
            <span className='header__important'> больше</span>
          </p>
        </li>
        <li className='header__item'>
          <img
            src={business}
            alt='бизнес-процессы'
            className='header__list-image'
          />
          <p className='header__item-text'>
            Погружаемся в
            <span className='header__important'> бизнес-процессы</span>
          </p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
