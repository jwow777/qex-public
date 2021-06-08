/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from 'react';
import {
  Button, FormControl, makeStyles, TextField,
} from '@material-ui/core';
import SelectContainer from '../Form/SelectContainer/SelectContainer';
import CheckboxContainer from '../Form/CheckboxContainer/CheckboxContainer';
import DateContainer from '../Form/DateContainer/DateContainer';
import './FormFeedback.css';
import { formApi } from '../../utils/api';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'grid',
    gridGap: '10px 0',
  },
  input: {
    '& label': {
      fontFamily: '"Inter", sans-serif',
      color: '#8f90a6',
    },
    '&:focus-within label': {
      color: '#3e7bfa',
    },
    '& input': {
      height: 19,
      fontFamily: '"Inter", sans-serif',
    },
    '& fieldset': {
      border: '1px solid #c7c9d9',
    },
    '& .MuiOutlinedInput-root:hover fieldset': {
      border: '1px solid #3e7bfa',
    },
    '& .MuiOutlinedInput-root:focus-within fieldset': {
      border: '1px solid #3e7bfa',
    },
  },
  submit: {
    width: 'auto',
    height: 40,
    backgroundColor: '#6875ef',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
    padding: '6px 10px',
    color: '#fff',
    marginLeft: 'auto',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      gridColumn: '1/3',
    },
    '&:hover': {
      backgroundColor: '#3e7bfa',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      color: '#fff',
    },
  },
}));

function FormFeedback({
  openPolicy, openSuccess,
  closeFeedbackPopup, closePopupSuccess,
}) {
  const classes = useStyles();
  const [state, setState] = useState({
    communication: 'call',
    phone: '',
    country: {},
    email: '',
    firstName: '',
    company: '',
    task: '',
    policy: true,
    localDate: new Date(),
    date: new Date(new Date().setHours(new Date().getHours() + 1)),
    verificationDate: new Date(new Date().setHours(new Date().getHours() + 1)),
  });
  const [selectedDate, setSelectedDate] = useState(state.date);
  const handleChangeDate = (date) => {
    setState({ ...state, date });
    setSelectedDate(date);
  };
  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });
  const handleChangeCheckbox = (e) => setState({ ...state, [e.target.name]: e.target.checked });
  const handleChangePhone = (phone, country) => {
    setState({
      ...state,
      phone,
      country: {
        country: country.name,
        dialCode: country.dialCode,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    closeFeedbackPopup();
    setState({
      communication: 'call',
      phone: state.country.dialCode,
      country: {},
      email: '',
      firstName: '',
      company: '',
      task: '',
      policy: true,
      localDate: new Date(),
      date: new Date(new Date().setHours(new Date().getHours() + 1)),
      verificationDate: new Date(new Date().setHours(new Date().getHours() + 1)),
    });
    openSuccess();
    setTimeout(() => closePopupSuccess(), 5000);
    formApi(state, 1);
  };

  return (
    <FormControl
      component='form'
      variant='outlined'
      size='small'
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <SelectContainer
        state={state}
        handleChange={handleChange}
        handleChangePhone={handleChangePhone}
        classNameContainer='formfeedback'
      />
      <TextField
        name='firstName'
        label='Имя'
        type='text'
        variant='outlined'
        size='small'
        value={state.firstName}
        onChange={handleChange}
        className={classes.input}
      />
      <TextField
        name='company'
        label='Компания'
        type='text'
        variant='outlined'
        size='small'
        value={state.company}
        onChange={handleChange}
        className={classes.input}
      />
      <TextField
        name='task'
        label='О задаче'
        multiline
        rows={4}
        variant='outlined'
        size='small'
        value={state.task}
        onChange={handleChange}
        className={classes.input}
      />
      <CheckboxContainer
        state={state}
        handleChangeCheckbox={handleChangeCheckbox}
        openPolicy={openPolicy}
        classNameContainer='formfeedback'
      />
      <div className='formfeedback__button-block'>
        <DateContainer
          state={state}
          selectedDate={selectedDate}
          handleChangeDate={handleChangeDate}
          classNameContainer='formfeedback'
        />
        <Button
          type='submit'
          variant='contained'
          className={classes.submit}
          disabled={!(state.email || state.phone) || !state.policy || state.localDate > state.date}
        >
          Отправить
        </Button>
      </div>
    </FormControl>
  );
}

export default FormFeedback;
