import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';
import Popup from '../Popup/Popup';
import './PopupReadyServices.css';

function PopupReadyServices({ open, close, data }) {
  const useStyles = makeStyles((theme) => ({
    headerBox: {
      minHeight: 90,
      backgroundColor: data.bgColor,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, max-content)',
      justifyContent: 'center',
      alignItems: 'center',
      gridGap: 10,
    },
    headerImage: {
      maxWidth: 50,
      maxHeight: 50,
    },
    headerTitle: {
      fontFamily: 'Yantramanav',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 45,
      lineHeight: 1.2,
      color: data.textColor,
      margin: 0,
    },
    link: {
      width: 'fit-content',
      height: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      marginTop: 'auto',
      marginLeft: 'auto',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 25,
      lineHeight: 1.2,
      color: data.bgColor,
      textDecoration: 'none',
      textAlign: 'right',
      '& svg': {
        marginTop: 3,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginTop: 0,
        marginLeft: 0,
        '& svg': {
          fontSize: '1rem',
        },
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
          <img src={data.icon} alt={data.title} className={classes.headerImage}/>
          <p className={classes.headerTitle}>{data.title}</p>
        </div>
        <div className='popup__ready-services-content-box'>
          <div className='popup__ready-services-image-box'>
            <img src={data.desktopImage} alt={data.title} className='popup__ready-services-image-computer'/>
            <img src={data.mobileImage} alt={data.title} className='popup__ready-services-image-mobile'/>
          </div>
          <h2 className='popup__ready-services-title'>{data.descriptionTitle}</h2>
          <p className='popup__ready-services-subtitle'>{data.descriptionSubtitle}</p>
          <a href={data.href} className={classes.link}>
            На сайт продукта <ArrowForwardIos/>
          </a>
        </div>
      </div>
    </Popup>
  );
}

export default PopupReadyServices;
