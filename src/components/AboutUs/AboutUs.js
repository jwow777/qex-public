/* eslint no-confusing-arrow: "error" */
/* eslint-env es6 */
import React, { useState } from 'react';
import { Button, makeStyles, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import review from '../../utils/review';
import Arrow from '../Arrow/Arrow';
import Reviewer from '../Reviewer/Reviewer';
import './AboutUs.css';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  button: {
    height: 35,
    minWidth: 35,
    backgroundColor: '#EAEAEA',
  },
}));

function AboutUs() {
  const classes = useStyles();
  // Settings carousel
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = review.length;
  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 2);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 2);

  const [exReview, setExReview] = useState(false);
  const handleChangeVisible = () => (exReview ? setExReview(false) : setExReview(true));

  return (
    <section className='aboutus'>
      <div className='aboutus__container'>
        <h2 className='title aboutus__title'>О нас говорят</h2>
        <ul className='list aboutus__list aboutus__list_desktop'>
          {review.map((item, index) => (
            <Reviewer data={item} key={index} extra={exReview}/>
          ))}
        </ul>
        <ul className='list aboutus__list aboutus__list_mobile'>
          <Reviewer data={review[activeStep]}/>
          <Reviewer data={review[activeStep + 1]}/>
        </ul>
        <MobileStepper
          steps={maxSteps - 1}
          position="static"
          variant="progress"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 2} className={classes.button}>
              <KeyboardArrowRight fontSize="large"/>
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0} className={classes.button}>
              <KeyboardArrowLeft fontSize="large"/>
            </Button>
          }
          className={classes.navbar}
        />
        <div className={`link link_navigation link_aboutus${exReview ? ' link_hidden' : ''}`} onClick={handleChangeVisible}>
          Еще отзывы <Arrow down={true}/>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
