import React from 'react';
import './Header.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import UlLists from '../UlLists/UlLists';
import headerlist from '../../utils/headerlist';
import HeaderList from '../HeaderList/HeaderList';
import background from '../../images/header/bg.jpg';

function Header({ onFeedback }) {
  const classNameSection = 'header';
  return (
    <header
      className='header'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='header__container'>
        <HeaderMenu onFeedback={onFeedback}/>
        <div className='header__content header__content_middle'>
          <h1 className='header__title'>
            Разработчики решений автоматизации для бизнеса
          </h1>
          <h2 className='header__subtitle'>
            Разрабатываем и внедряем софт для автоматизации бизнес-процессов
          </h2>
          {/* <Button
            variant='contained'
            color='primary'
            className='header__button_test'
            onClick={onFeedback}
          >
            Заявка на разработку
          </Button> */}
        </div>
      </div>
      <UlLists className={`${classNameSection}__list`} dataMap={headerlist} Component={HeaderList}/>
    </header>
  );
}

export default Header;
