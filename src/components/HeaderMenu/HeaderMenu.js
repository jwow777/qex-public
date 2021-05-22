import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  MenuItem,
  MenuList,
  Popover,
} from '@material-ui/core';
import './HeaderMenu.css';

import logo from '../../images/header/logo.png';

import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';

const useStyles = makeStyles(() => ({
  langBox: {
    '& .MuiPopover-paper': {
      marginTop: 10,
    },
  },
}));

function HeaderMenu({ policy }) {
  const classes = useStyles();

  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);

  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };

  return (
    <div className={`header__content header__content_top${policy ? ' header__content_policy' : ''}`}>
      <Link to='/'>
        <img src={logo} alt='QEX' className='header__logo'/>
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
          className={classes.langBox}
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
  );
}

export default HeaderMenu;
