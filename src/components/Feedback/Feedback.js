/* eslint-disable prefer-template */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Button, FormControl, makeStyles, TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import SelectContainer from '../Form/SelectContainer/SelectContainer';
import CheckboxContainer from '../Form/CheckboxContainer/CheckboxContainer';
import DateContainer from '../Form/DateContainer/DateContainer';
import './Feedback.css';
import bg from '../../images/feedback/bg.png';
import { formApi } from '../../utils/api';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '300px max-content',
    alignSelf: 'center',
    gridGap: '0 15px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.down('xs')]: {
      gridColumn: '1/3',
      gridTemplateColumns: '1fr',
    },
  },
  input: {
    '& label': {
      fontFamily: '"Inter", sans-serif',
      color: '#8f90a6',
    },
    '&:focus-within label': {
      color: '#ff374f',
    },
    '& input': {
      height: 19,
      fontFamily: '"Inter", sans-serif',
    },
    '& fieldset': {
      border: '1px solid #c7c9d9',
    },
    '& .MuiOutlinedInput-root:hover fieldset': {
      border: '1px solid #ff374f',
    },
    '& .MuiOutlinedInput-root:focus-within fieldset': {
      border: '1px solid #ff374f',
    },
  },
  submit: {
    width: 'auto',
    height: 40,
    backgroundColor: '#ff374f',
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
      backgroundColor: '#ff374f',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      color: '#fff',
    },
  },
}));

function Feedback({
  openPolicy, openSuccess, closeSuccess,
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
  const [openInputs, setOpenInputs] = useState(false);
  function handleVisibleInputs() {
    if (openInputs) {
      setOpenInputs(false);
    } else {
      setOpenInputs(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenInputs(false);
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
    setTimeout(() => closeSuccess(), 5000);
    formApi(state, 2);
  };
  return (
    <section className='feedback'>
      <div className='feedback__container'>
        <div
          className='feedback__image'
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <h2 className='feedback__title'>
          ???????????????? ?????????????????? ?? ?????????????????? <span className='feedback__title feedback__title_red'>??????????????</span>
        </h2>
        <h3 className='feedback__subtitle'>???????????????? ?????????????????????????? ?????????????? ?? ????????????-????????????????</h3>
        <FormControl
          component='form'
          variant='outlined'
          size='small'
          className={`${classes.form} feedback__form${openInputs ? ' feedback__form_extra' : ''}`}
          onSubmit={handleSubmit}
        >
          <SelectContainer
            state={state}
            handleChange={handleChange}
            handleChangePhone={handleChangePhone}
            classNameContainer='feedback'
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={`feedback__submit-site${openInputs ? ' feedback__submit-site_hidden' : ''}`}
            disabled={!(state.email || state.phone) || !state.policy}
          >
            ???????????????? ????????????
          </Button>
          <div className={`feedback__extra-input${openInputs ? ' feedback__extra-input_visible' : ''}`}>
            <TextField
              name='firstName'
              label='??????'
              type='text'
              variant='outlined'
              size='small'
              value={state.firstName}
              onChange={handleChange}
              className={classes.input}
            />
            <TextField
              name='company'
              label='????????????????'
              type='text'
              variant='outlined'
              size='small'
              value={state.company}
              onChange={handleChange}
              className={classes.input}
            />
            <TextField
              name='task'
              label='?? ????????????'
              multiline
              rows={4}
              variant='outlined'
              size='small'
              value={state.task}
              onChange={handleChange}
              className={classes.input}
            />
          </div>
          <CheckboxContainer
            state={state}
            handleChangeCheckbox={handleChangeCheckbox}
            openPolicy={openPolicy}
            classNameContainer='feedback'
          />
          <div className={`feedback__extra-input feedback__button-block${openInputs ? ' feedback__extra-input_visible' : ''}`}>
            <DateContainer
              state={state}
              selectedDate={selectedDate}
              handleChangeDate={handleChangeDate}
              classNameContainer='feedback'
            />
            <Button
              type='submit'
              variant='contained'
              className={classes.submit}
              disabled={
                !(state.email || state.phone) || !state.policy || state.localDate > state.date
              }
            >
              ??????????????????
            </Button>
          </div>
          <Button
            className={`feedback__file${openInputs ? ' feedback__file_hidden' : ''}`}
            startIcon={<Add color='secondary'/>}
            onClick={handleVisibleInputs}
          >
            ?????????????? ?????? ????????????
          </Button>
        </FormControl>
      </div>
    </section>
  );
}

export default Feedback;
