import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';
import { ArrowDropDown, Event } from '@material-ui/icons';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ru from 'date-fns/locale/ru';
import 'react-phone-input-2/lib/material.css';

function DateContainer({
  state,
  selectedDate,
  handleChangeDate,
  classNameContainer,
}) {
  const useStyles = makeStyles((theme) => ({
    time: {
      width: 90,
      height: 40,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      '.MuiPaper-root': {
        top: 45,
        left: 45,
      },
      '& .MuiOutlinedInput-adornedEnd': {
        height: 40,
        padding: 0,
      },
      '& .MuiInputAdornment-positionEnd': {
        marginLeft: 0,
      },
      '& input': {
        fontFamily: '"Inter", sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
      },
      '& fieldset': {
        borderColor: '#c7c9d9',
      },
      '& .MuiOutlinedInput-root:hover fieldset': {
        borderColor: classNameContainer === 'formfeedback' ? '#3e7bfa' : '#ff374f',
      },
      '& .MuiOutlinedInput-root:focus-within fieldset': {
        border: `1px solid ${classNameContainer === 'formfeedback' ? '#3e7bfa' : '#ff374f'}`,
      },
    },
    date: {
      width: 150,
      height: 40,
      marginLeft: 6,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginLeft: 0,
      },
      '& .MuiOutlinedInput-adornedStart': {
        height: 40,
        padding: '0 0 0 11px',
      },
      '& .MuiInputAdornment-positionStart': {
        marginRight: 5,
      },
      '& .MuiInputAdornment-positionEnd': {
        marginLeft: 0,
      },
      '& input': {
        fontFamily: '"Inter", sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
      },
      '& fieldset': {
        borderColor: '#c7c9d9',
      },
      '& .MuiOutlinedInput-root:hover fieldset': {
        borderColor: classNameContainer === 'formfeedback' ? '#3e7bfa' : '#ff374f',
      },
      '& .MuiOutlinedInput-root:focus-within fieldset': {
        border: `1px solid ${classNameContainer === 'formfeedback' ? '#3e7bfa' : '#ff374f'}`,
      },
    },
  }));
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
      <TimePicker
        autoOk
        ampm={false}
        inputVariant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <ArrowDropDown/>
            </InputAdornment>
          ),
        }}
        value={selectedDate}
        minutesStep={5}
        size='small'
        onChange={handleChangeDate}
        className={`${classes.time}${JSON.stringify(state.verificationDate) === JSON.stringify(state.date) ? ` ${classNameContainer}__date_unchange` : ''}`}
      />
      <DatePicker
        autoOk
        disableToolbar
        disablePast={true}
        format='dd.MM.yyyy'
        inputVariant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Event />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <ArrowDropDown/>
            </InputAdornment>
          ),
        }}
        value={selectedDate}
        size='small'
        onChange={handleChangeDate}
        className={`${classes.date}${JSON.stringify(state.verificationDate) === JSON.stringify(state.date) ? ` ${classNameContainer}__date_unchange` : ''}`}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DateContainer;
