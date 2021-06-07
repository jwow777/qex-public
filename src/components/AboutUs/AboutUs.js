import React from 'react';
import review from '../../utils/review';
import Reviewer from '../Reviewer/Reviewer';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className='aboutus'>
      <div className='aboutus__container'>
        <h2 className='title aboutus__title'>О нас говорят</h2>
        <ul className='list aboutus__list'>
          {review.map((item, index) => (
            <Reviewer data={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
