import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  MenuItem,
  MenuList,
  Popover,
  SwipeableDrawer,
} from '@material-ui/core';
import { Call, ChevronRight, Menu } from '@material-ui/icons';
import clsx from 'clsx';
import './HeaderMenu.css';

import logo from '../../images/header/logo.png';

import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';

const useStyles = makeStyles({
  langBox: {
    '& .MuiPopover-paper': {
      marginTop: 10,
    },
  },
  list: {
    width: '210px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerHeader: {
    height: 82,
    display: 'flex',
    alignItems: 'center',
    padding: '0 4px',
    '& .MuiIconButton-root': {
      height: 46,
      padding: 0,
    },
  },
  swipeArrow: {
    fontSize: 46,
  },
  listItem: {
    marginTop: 9,
    marginBottom: 9,
    '& .MuiTypography-body1': {
      fontFamily: '"Inter", sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 22,
      lineHeight: '27px',
      color: '#000',
    },
  },
  bottomBox: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    display: 'grid',
    gridGap: 20,
    alignItems: 'center',
    marginTop: 'auto',
    boxSizing: 'border-box',
    padding: '40px 16px',
  },
  phone: {
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    textDecoration: 'none',
    color: '#1c1c1c',
  },
  buttonFeedBack: {
    minHeight: 30,
    backgroundColor: '#fff',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.2,
    color: '#000',
    textTransform: 'none',
    borderRadius: 9,
    '&:hover': {
      backgroundColor: '#3e7bfa',
      color: '#fff',
    },
  },
});

function HeaderMenu({ onFeedback, policy }) {
  const classes = useStyles();
  const [state, setState] = useState(false);
  // Выбор языка
  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);

  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };
  // Боковое меню
  const toggleDrawer = (open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(false)}>
          <ChevronRight className={classes.swipeArrow}/>
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Услуги', 'Почитать', 'Кейсы', 'Контакты'].map((text) => (
          <ListItem button key={text} onClick={toggleDrawer(false)}>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
      <div className={classes.bottomBox}>
        <a href="tel:+74954899696" className={classes.phone}>
          +7 (495) 489-96-96
        </a>
        <Button
          variant="contained"
          className={classes.buttonFeedBack}
          onClick={onFeedback}
        >
          Оставить заявку
        </Button>
        <div className='header__lang-swipe-box' onClick={handleMenuLang}>
          <img src={language} alt='language' className='header__lang-current-swipe-box'/>
          <p className='header__lang-text'>{language === ru ? 'Русский' : 'English'}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`header__content header__content_top${policy ? ' header__content_policy' : ''}`}>
      <Link to='/'>
        <img src={logo} alt='QEX' className='header__logo'/>
      </Link>
      <div className='header__block'>
        <a href='tel:+74954899696' className='link header__phone'>
          <Call fontSize='large'/>
          <p className='header__phone-text'>+7 (495) 489-96-96</p>
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
        <IconButton
          className="header__menu-button-mobile"
          onClick={toggleDrawer(true)}
        >
          <Menu />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          {list()}
        </SwipeableDrawer>
      </div>
    </div>
  );
}

export default HeaderMenu;
