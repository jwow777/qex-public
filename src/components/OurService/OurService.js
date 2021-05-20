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

  return (
    <li
      className={`our-service${styles ? ` our-service_${styles}` : ''}`}
      style={{ background: bgColor }}
    >
      {
        href
          ? <a href={href} className='our-service__link' style={{ color: textColor }}>
              <img src={icon} alt={title} className='our-service__image' />
              <h3 className='our-service__title'>{title}</h3>
              <p className='our-service__about'>{subtitle}</p>
              {alpha && (
                <div className='our-service__version-block'>
                  <svg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='7.31641' cy='6.5' r='6' stroke={colorAlpha}/>
                    <circle cx='7.31641' cy='6.5' r='0.5' fill={colorAlpha}/>
                    <line x1='7.31641' y1='1' x2='7.31641' y2='2' stroke={colorAlpha}/>
                    <line x1='7.31641' y1='11' x2='7.31641' y2='12' stroke={colorAlpha}/>
                    <line x1='2.31641' y1='6' x2='2.31641' y2='7' stroke={colorAlpha}/>
                    <line x1='12.3164' y1='6' x2='12.3164' y2='7' stroke={colorAlpha}/>
                    <line x1='11.0925' y1='2.84513' x2='11.4216' y2='3.22161' stroke={colorAlpha} strokeWidth='0.5'/>
                    <line x1='3.01429' y1='9.54717' x2='3.31986' y2='9.94292' stroke={colorAlpha} strokeWidth='0.5'/>
                    <line x1='3.61037' y1='2.78971' x2='3.97163' y2='2.44403' stroke={colorAlpha} strokeWidth='0.5'/>
                    <line x1='11.0445' y1='10.196' x2='11.3742' y2='9.82009' stroke={colorAlpha} strokeWidth='0.5'/>
                    <rect x='7.06641' y='2.19995' width='0.5' height='4' fill={colorAlpha}/>
                    <rect x='7.61719' y='6.75' width='0.5' height='4' transform='rotate(-89.6185 7.61719 6.75)' fill={colorAlpha}/>
                  </svg>
                  <span style={{ color: colorAlpha }}>alpha</span>
                </div>
              )}
            </a>
          : <div className='our-service__box' style={{ color: textColor }}>
              <img src={icon} alt={title} className='our-service__image' />
              <h3 className='our-service__title'>{title}</h3>
              <p className='our-service__about'>{subtitle}</p>
              {alpha && (
                <div className='our-service__version-block'>
                  <svg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='7.31641' cy='6.5' r='6' stroke={colorAlpha}/>
                    <circle cx='7.31641' cy='6.5' r='0.5' fill={colorAlpha}/>
                    <line x1='7.31641' y1='1' x2='7.31641' y2='2' stroke={colorAlpha}/>
                    <line x1='7.31641' y1='11' x2='7.31641' y2='12' stroke={colorAlpha}/>
                    <line x1='2.31641' y1='6' x2='2.31641' y2='7' stroke={colorAlpha}/>
                    <line x1='12.3164' y1='6' x2='12.3164' y2='7' stroke={colorAlpha}/>
                    <line x1='11.0925' y1='2.84513' x2='11.4216' y2='3.22161' stroke={colorAlpha} strokeWidth='0.5'/>
                    <line x1='3.01429' y1='9.54717' x2='3.31986' y2='9.94292' stroke={colorAlpha} strokeWidth='0.5'/>
                    <line x1='3.61037' y1='2.78971' x2='3.97163' y2='2.44403' stroke={colorAlpha} strokeWidth='0.5'/>
                    <line x1='11.0445' y1='10.196' x2='11.3742' y2='9.82009' stroke={colorAlpha} strokeWidth='0.5'/>
                    <rect x='7.06641' y='2.19995' width='0.5' height='4' fill={colorAlpha}/>
                    <rect x='7.61719' y='6.75' width='0.5' height='4' transform='rotate(-89.6185 7.61719 6.75)' fill={colorAlpha}/>
                  </svg>
                  <span style={{ color: colorAlpha }}>alpha</span>
                </div>
              )}
              {beta && (
                <div className='our-service__version-block'>
                  <span style={{ color: colorAlpha }}>beta</span>
                </div>
              )}
            </div>
      }
    </li>
  );
}

export default OurService;
