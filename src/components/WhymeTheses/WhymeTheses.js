import React from 'react';
import '../Whyme/Whyme.css';

function WhymeTheses({ item }) {
  return (
    <li className='whyme__item'>
      <img
        src={item.imageSrc}
        alt={item.title}
        className={`whyme__item-image${item.imageClass ? ` ${item.imageClass}` : ''}`}
      />
      <h3 className={`whyme__item-title${item.titleClass ? ` ${item.titleClass}` : ''}`}>{item.title}</h3>
      <p className={`whyme__item-description${item.descriptionClass ? ` ${item.descriptionClass}` : ''}`}>
        {item.descriptionOne}
        <span className='whyme__item-description_bold'>
          {item.descriptionBold}
        </span>
        {item.descriptionTwo}
      </p>
      <p className='whyme__item-description'>
        {item.descriptionExtra}
      </p>
    </li>
  );
}

export default WhymeTheses;
