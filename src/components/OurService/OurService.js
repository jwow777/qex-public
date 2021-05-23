import { makeStyles } from '@material-ui/core';
import React from 'react';
import './OurService.css';

function OurService({ item, styles }) {
  const {
    title,
    subtitle,
    bgColor,
    textColor,
    icon,
    alpha,
    colorAlpha,
    beta,
    href,
  } = item;

  const useStyles = makeStyles((theme) => ({
    container: {
      background: bgColor,
    },
    box: {
      color: textColor,
    },
    alpha: {
      color: colorAlpha,
      [theme.breakpoints.down('xs')]: {
        color: textColor,
      },
    },
    beta: {
      color: bgColor,
      [theme.breakpoints.down('xs')]: {
        color: textColor,
      },
    },
  }));

  const classes = useStyles();

  const alphaBlock = () => (
    <div className='our-service__version-block our-service__version-block_alpha'>
      <div className='our-service__icon-alpha our-service__icon-alpha_desktop'>
        <svg viewBox="0 0 14 14" width='15' height='15' fill='none'>
          <circle cx="6.5" cy="6.5" r="6.25" stroke={colorAlpha} strokeWidth=".5"/>
          <circle cx="6.5" cy="6.5" r=".5" fill={colorAlpha}/>
          <path stroke={colorAlpha} d="M6.5 1v1M6.5 11v1M1.5 6v1M11.498 6v1"/>
          <path stroke={colorAlpha} strokeWidth=".5" d="M10.276 2.845l.329.377M2.2 9.547l.305.396M2.794 2.79l.361-.346M10.226 10.196l.33-.376"/>
          <path fill={colorAlpha} d="M6.25 2.2h.5v4h-.5zM6.8 6.75l.004-.5 4 .026-.003.5z"/>
        </svg>
      </div>
      <div className='our-service__icon-alpha our-service__icon-alpha_mobile'>
        <svg viewBox="0 0 14 14" width='13' height='13' fill='none'>
          <circle cx="6.5" cy="6.5" r="6.25" stroke={textColor} strokeWidth=".5"/>
          <circle cx="6.5" cy="6.5" r=".5" fill={textColor}/>
          <path stroke={textColor} d="M6.5 1v1M6.5 11v1M1.5 6v1M11.498 6v1"/>
          <path stroke={textColor} strokeWidth=".5" d="M10.276 2.845l.329.377M2.2 9.547l.305.396M2.794 2.79l.361-.346M10.226 10.196l.33-.376"/>
          <path fill={textColor} d="M6.25 2.2h.5v4h-.5zM6.8 6.75l.004-.5 4 .026-.003.5z"/>
        </svg>
      </div>
      <span className={classes.alpha}>alpha</span>
    </div>
  );

  const betaBlock = () => (
    <div className='our-service__version-block our-service__version-block_beta'>
      <span className={classes.beta}>beta</span>
    </div>
  );

  return (
    <li
      className={`${classes.container} our-service${styles ? ` our-service_${styles}` : ''}`}
    >
      {
        href
          ? <a href={href} className={`${classes.box} our-service__link`}>
              <img src={icon} alt={title} className='our-service__image' />
              <h3 className='our-service__title'>{title}</h3>
              <p className='our-service__about'>{subtitle}</p>
              {alpha && alphaBlock()}
              {beta && betaBlock()}
            </a>
          : <div className={`${classes.box} our-service__box`}>
              <img src={icon} alt={title} className='our-service__image' />
              <h3 className='our-service__title'>{title}</h3>
              <p className='our-service__about'>{subtitle}</p>
              {alpha && alphaBlock()}
              {beta && betaBlock()}
            </div>
      }
    </li>
  );
}

export default OurService;
