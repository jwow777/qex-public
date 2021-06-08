import React from 'react';

function HeaderList({ item }) {
  const {
    imageSrc, imageTitle, description, descriptionBold,
  } = item;
  return (
    <li className='header__item'>
      <img src={imageSrc} alt={imageTitle} className='header__list-image' />
      <p className='header__item-text'>
        {description}
        <span className='header__important'>{descriptionBold}</span>
      </p>
    </li>
  );
}

export default HeaderList;
