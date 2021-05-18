import React from 'react';
import './Arrow.css';
import arrowDark from '../../images/icons/arrow-dark.svg';
import arrowLight from '../../images/icons/arrow-light.svg';

function Arrow({ white, down }) {
  return (
    <img
      src={white ? arrowLight : arrowDark}
      alt='Стрелка'
      className={ `link__arrow${down ? ' link__arrow_down' : ''}` }
    />
  );
}

export default Arrow;
