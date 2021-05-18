import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  MenuItem,
  MenuList,
  Popover,
} from '@material-ui/core';

import './Header.css';
import background from '../../images/header/bg.jpg';
import logo from '../../images/header/logo.png';

import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';

function Header({ onFeedback }) {
  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);

  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };

  return (
    <header
      className='header'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='header__container'>
        <div className='header__content header__content_top'>
          <Link to='/'>
            <img src={logo} alt='QEX' />
          </Link>
          <div className='header__block'>
            <a href='tel:+74954899696' className='link header__phone'>
              +7 (495) 489-96-96
            </a>
            <img src={language} alt='language' className='header__lang-current' onClick={handleMenuLang}/>
            <Popover
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openLang}
              onClose={handleCloseLang}
            >
              <MenuList>
                <MenuItem onClick={handleCloseLang} lang={ru}>
                  <img src={ru} alt='Русский' className='header__lang-image'/>
                  Русский
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={us}>
                  <img src={us} alt='English' className='header__lang-image'/>
                  English
                </MenuItem>
              </MenuList>
            </Popover>
          </div>
        </div>
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
          Всегда удобный <span className='header__important'>интерфейс</span>
        </li>
        <li className='header__item'>
          Ваша команда cможет <span className='header__important'>больше</span>
        </li>
        <li className='header__item'>
          Погружаемся в{' '}
          <span className='header__important'>бизнес-процессы</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
