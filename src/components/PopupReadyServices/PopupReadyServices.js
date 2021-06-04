import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';
import Popup from '../Popup/Popup';
import './PopupReadyServices.css';

function PopupReadyServices({ open, close, data }) {
  const useStyles = makeStyles((theme) => ({
    headerBox: {
      display: 'grid',
      gridGap: 10,
      minHeight: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: data.bgColor,
      gridTemplateColumns: 'repeat(2, max-content)',
    },
    title: {
      color: data.textColor,
      margin: 0,
      fontSize: 45,
      fontStyle: 'normal',
      fontFamily: 'Yantramanav',
      fontWeight: 300,
      lineHeight: 1.2,
    },
    link: {
      color: data.bgColor,
      width: 'fit-content',
      height: 'fit-content',
      display: 'flex',
      fontSize: 25,
      fontStyle: 'normal',
      marginTop: 'auto',
      textAlign: 'right',
      alignItems: 'center',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: 1.2,
      marginLeft: 'auto',
      textDecoration: 'none',
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginTop: 0,
        marginLeft: 0,
      },
    },
    arrow: {
      marginTop: 2,
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
      },
    },
  }));
  const classes = useStyles();
  return (
    <Popup
      open={open}
      close={close}
      classContainer='ready-services'
    >
      <div>
        <div className={classes.headerBox}>
          <img src={data.icon} />
          <h2 className={classes.title}>{data.title}</h2>
        </div>
        <div className='popup__ready-services-content-box'>
          <div className='popup__ready-services-image-box'>
            <img src={data.desktop} className='popup__ready-services-image-computer'/>
            <img src={data.mobile} className='popup__ready-services-image-mobile'/>
          </div>
          <h3 className='popup__ready-services-title'>{data.contentTitle}</h3>
          <p className='popup__ready-services-subtitle'>{data.contentSubtitle}</p>
          <a href={data.href} className={classes.link}>
            На сайт продукта <ArrowForwardIos className={classes.arrow}/>
          </a>
        </div>
      </div>
    </Popup>
  );
}

export default PopupReadyServices;
