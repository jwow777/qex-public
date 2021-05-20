/* eslint-disable prefer-template */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@material-ui/core';
import {
  ArrowDropDown,
  Event,
  LocalPhoneRounded,
  MailOutlineRounded,
  Telegram,
  WhatsApp,
} from '@material-ui/icons';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import clsx from 'clsx';
import MuiAlert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/date-fns';
import ru from 'date-fns/locale/ru';
import './FormFeedback.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/plain.css';
import checked from '../../images/feedback/checked.svg';

const useStyles = makeStyles(() => ({
  icon: {
    width: 10,
    height: 10,
    borderRadius: 2,
    boxSizing: 'border-box',
    border: '1px solid #b8b8b8',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  },
  checkedIcon: {
    border: '1px solid #3e7bfa',
    '&:before': {
      display: 'block',
      width: 10,
      height: 10,
      backgroundImage: `url(${checked})`,
      position: 'absolute',
      top: 8,
      content: '""',
    },
  },
}));

function FormFeedback({ openPolicy }) {
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
    date: new Date(),
  });

  const handleDate = (date) => {
    const twoNumber = (num) => (num < 10 ? '0' + num : num);
    const timezone = (num) => (num < 0 ? num : '+' + num);

    return `${twoNumber(date.getDate())}.${twoNumber(date.getMonth() + 1)}.${date.getFullYear()} ${twoNumber(date.getHours())}:${twoNumber(date.getMinutes())} UTC: ${timezone(date.getTimezoneOffset() / -60)}`;
  };

  const [openSuccess, setOpenSuccess] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
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

  const handleCloseSuccess = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return fetch('https://qex.team/connector.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'app_form',
        body: {
          communication: state.communication,
          phone: state.phone,
          country: state.country,
          dialCode: state.dialCode,
          email: state.email,
          firstName: state.firstName,
          company: state.company,
          task: state.task,
          localDate: handleDate(state.localDate),
          chosenDate: handleDate(state.date),
          policy: true,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        setOpenSuccess(true);
        return res.json();
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }).catch((err) => console.log(err));
  };

  return (
    <FormControl
      component='form'
      variant='outlined'
      size='small'
      className='formfeedback'
      onSubmit={handleSubmit}
    >
      <div className='formfeedback__phone-block'>
        <Select
          name='communication'
          defaultValue={state.communication}
          value={state.communication}
          onChange={handleChange}
          className='formfeedback__select'
        >
          <MenuItem value='call'>
            <LocalPhoneRounded className='formfeedback__select-image'/>
            Звонок
          </MenuItem>
          <MenuItem value='whatsapp'>
            <WhatsApp className='formfeedback__select-image'/>
            WhatsApp
          </MenuItem>
          <MenuItem value='telegram'>
            <Telegram className='formfeedback__select-image'/>
            Telegram
          </MenuItem>
          <MenuItem value='email'>
            <MailOutlineRounded className='formfeedback__select-image'/>
            Email
          </MenuItem>
        </Select>
        {state.communication === 'email' ? (
          <TextField
            name='email'
            type='email'
            variant='outlined'
            size='small'
            placeholder='email@mail.com'
            value={state.email}
            onChange={handleChange}
            className='formfeedback__input-email'
          />
        ) : (
          <PhoneInput
            country={'ru'}
            value={state.phone}
            onChange={handleChangePhone}
            containerClass={'formfeedback__input-phone-block'}
            inputClass={'formfeedback__input-phone'}
            buttonClass={'formfeedback__button-phone'}
          />
        )}
      </div>
      <TextField
        name='firstName'
        label='Имя'
        type='text'
        variant='outlined'
        size='small'
        value={state.firstName}
        onChange={handleChange}
        className='formfeedback__input'
      />
      <TextField
        name='company'
        label='Компания'
        type='text'
        variant='outlined'
        size='small'
        value={state.company}
        onChange={handleChange}
        className='formfeedback__input'
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
        className='formfeedback__input'
      />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        <label className='formfeedback__label'>
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
          className='formfeedback__label-politics'
          onClick={openPolicy('paper')}
        >
          политикой обработки данных
        </div>
      </Grid>
      <div className='formfeedback__button-block'>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
          <TimePicker
            autoOk
            variant='inline'
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
            className='formfeedback__input-time'
          />
          <DatePicker
            autoOk
            disableToolbar
            disablePast={true}
            variant='inline'
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
            className='formfeedback__input-date'
          />
        </MuiPickersUtilsProvider>
        <Button
          type='submit'
          variant='contained'
          className='formfeedback__submit'
          disabled={!(state.email || state.phone) || !state.policy}
        >
          Отправить
        </Button>
      </div>
      <Snackbar anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
        <MuiAlert elevation={6} variant='filled' severity='success' onClose={handleCloseSuccess}>
          Заявка уже в нашей CRM, мы скоро с вами свяжемся :)
        </MuiAlert>
      </Snackbar>
    </FormControl>
  );
}

export default FormFeedback;
