import React from 'react';
import {
  Checkbox, Grid, makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import checked from '../../../images/feedback/checked.svg';
import checkedGray from '../../../images/feedback/checked-gray.svg';

function CheckboxContainer({
  state,
  handleChangeCheckbox,
  openPolicy,
  classNameContainer,
}) {
  const useStyles = makeStyles(() => ({
    icon: {
      width: 10,
      height: 10,
      borderRadius: 2,
      boxSizing: 'border-box',
      border: '1px solid #b8b8b8',
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    },
    checkedIcon: {
      border: `${classNameContainer === 'formfeedback' ? '1px solid #3e7bfa' : 'auto'}`,
      '&:before': {
        display: 'block',
        width: 8,
        height: 10,
        backgroundImage: `url(${classNameContainer === 'formfeedback' ? checked : checkedGray})`,
        position: 'absolute',
        top: 8,
        left: 11,
        content: '""',
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='center'
      className={`${classNameContainer === 'feedback' ? 'feedback__checkbox feedback__checkbox_site' : ''}`}
    >
      <label className={`${classNameContainer}__label`}>
        <Checkbox
          name='policy'
          checked={state.policy}
          onChange={handleChangeCheckbox}
          size='small'
          color='primary'
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
        />
        Я согласен с
      </label>
      <div
        className={`${classNameContainer}__label-politics`}
        onClick={openPolicy('paper')}
      >
        политикой обработки данных
      </div>
    </Grid>
  );
}

export default CheckboxContainer;
