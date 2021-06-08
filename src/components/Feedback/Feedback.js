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
  TextField,
} from '@material-ui/core';
import {
  Add,
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
import DateFnsUtils from '@date-io/date-fns';
import ru from 'date-fns/locale/ru';
import PhoneInput from 'react-phone-input-2';
import './Feedback.css';
import bg from '../../images/feedback/bg.png';
import checked from '../../images/feedback/checked-gray.svg';

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
  select: {
    width: 70,
    border: 'none',
    borderRadius: '4px 0 0 4px',
    backgroundColor: 'white',
    alignItems: 'normal',
    boxSizing: 'border-box',
    '& div': {
      borderRadius: '4px 0 0 4px',
      whiteSpace: 'normal',
      textOverflow: 'clip',
      lineHeight: '24px',
    },
    '& div:focus': {
      backgroundColor: '#fff',
      borderRadius: '4px 0 0 4px',
      minHeight: 'auto',
    },
    '& div svg': {
      width: 19,
      height: 19,
    },
    '& fieldset': {
      border: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      width: 50,
      '& div': {
        paddingLeft: 8,
      },
      '& .MuiSelect-iconOutlined': {
        right: 0,
      },
    },
  },
  email: {
    width: '100%',
    height: 'auto',
    border: 'none',
    borderLeft: '1px solid #c7c9d9',
    overflow: 'hidden',
    '& .MuiInputBase-root': {
      height: '100%',
      fontFamily: '"Inter", sans-serif',
      color: '#303030',
    },
    '& fieldset': {
      border: 'none',
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
    '&:before': {
      display: 'block',
      width: 8,
      height: 10,
      backgroundImage: `url(${checked})`,
      position: 'absolute',
      top: 8,
      left: 11,
      content: '""',
    },
  },
  time: {
    width: 90,
    height: 40,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
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
      borderColor: '#ff374f',
    },
    '& .MuiOutlinedInput-root:focus-within fieldset': {
      border: '1px solid #ff374f',
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
      borderColor: '#ff374f',
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

function Feedback({ openPolicy, openSuccess, closeSuccess }) {
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

  const twoNumber = (num) => (num < 10 ? '0' + num : num);
  const handleDate = (date) => {
    const timezone = (num) => (num < 0 ? num : '+' + num);
    return `${twoNumber(date.getDate())}.${twoNumber(date.getMonth() + 1)}.${date.getFullYear()} ${twoNumber(date.getHours())}:${twoNumber(date.getMinutes())} UTC: ${timezone(date.getTimezoneOffset() / -60)}`;
  };
  const handleChosenDate = (date) => {
    const differenceTime = (num) => {
      const timezoneClient = date.getTimezoneOffset() / -60;
      return num + timezoneClient * (-1) + 3;
    };
    let day = date.getDate();
    let hours = differenceTime(date.getHours());
    if (hours > 23) {
      day += 1;
      hours -= 24;
    } else if (hours < 0) {
      day -= 1;
      hours += 24;
    }
    return `${twoNumber(day)}.${twoNumber(date.getMonth() + 1)}.${date.getFullYear()} ${twoNumber(hours)}:${twoNumber(date.getMinutes())}`;
  };

  const [selectedDate, setSelectedDate] = useState(state.date);
  const handleDateChange = (date) => {
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
    return fetch('https://qex.team/connector.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'app_form',
        body: {
          form_id: 2,
          communication: state.communication,
          phone: state.phone,
          country: state.country,
          dialCode: state.dialCode,
          email: state.email,
          firstName: state.firstName,
          company: state.company,
          task: state.task,
          localDate: handleDate(state.localDate),
          chosenDate: JSON.stringify(state.verificationDate) === JSON.stringify(state.date) ? 'Не выбрана дата' : handleChosenDate(state.date),
          policy: true,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }).catch((err) => console.log(err));
  };
  return (
    <section className='feedback'>
      <div className='feedback__container'>
        <div
          className='feedback__image'
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <h2 className='feedback__title'>
          Проведем аналитику и предложим <span className='feedback__title feedback__title_red'>решение</span>
        </h2>
        <h3 className='feedback__subtitle'>Увеличим эффективность команды и бизнес-процесса</h3>
        <FormControl
          component='form'
          variant='outlined'
          size='small'
          className={`${classes.form} feedback__form${openInputs ? ' feedback__form_extra' : ''}`}
          onSubmit={handleSubmit}
        >
          <div className='feedback__phone-block'>
            <Select
              name='communication'
              defaultValue={state.communication}
              value={state.communication}
              onChange={handleChange}
              className={classes.select}
            >
              <MenuItem value='call'>
                <LocalPhoneRounded className='feedback__select-image'/>
                Звонок
              </MenuItem>
              <MenuItem value='whatsapp'>
                <WhatsApp className='feedback__select-image'/>
                WhatsApp
              </MenuItem>
              <MenuItem value='telegram'>
                <Telegram className='feedback__select-image'/>
                Telegram
              </MenuItem>
              <MenuItem value='email'>
                <MailOutlineRounded className='feedback__select-image'/>
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
                className={classes.email}
              />
            ) : (
              <PhoneInput
                country={'ru'}
                value={state.phone}
                onChange={handleChangePhone}
                containerClass={'feedback__input-phone-block'}
                inputClass={'input feedback__input-phone'}
                buttonClass={'feedback__button-phone'}
              />
            )}
          </div>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={`feedback__submit-site${openInputs ? ' feedback__submit-site_hidden' : ''}`}
            disabled={!(state.email || state.phone) || !state.policy}
          >
            Обсудить проект
          </Button>
          <div className={`feedback__extra-input${openInputs ? ' feedback__extra-input_visible' : ''}`}>
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
          </div>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            className='feedback__checkbox feedback__checkbox_site'
          >
            <label className='feedback__label'>
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
              className='feedback__label-politics'
              onClick={openPolicy('paper')}
            >
              политикой обработки данных
            </div>
          </Grid>
          <div className={`feedback__extra-input feedback__button-block${openInputs ? ' feedback__extra-input_visible' : ''}`}>
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
                onChange={handleDateChange}
                className={`${classes.time}${JSON.stringify(state.verificationDate) === JSON.stringify(state.date) ? ' formfeedback__date_unchange' : ''}`}
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
                onChange={handleDateChange}
                className={`${classes.date}${JSON.stringify(state.verificationDate) === JSON.stringify(state.date) ? ' formfeedback__date_unchange' : ''}`}
              />
            </MuiPickersUtilsProvider>
            <Button
              type='submit'
              variant='contained'
              className={classes.submit}
              disabled={
                !(state.email || state.phone) || !state.policy || state.localDate > state.date
              }
            >
              Отправить
            </Button>
          </div>
          <Button
            className={`feedback__file${openInputs ? ' feedback__file_hidden' : ''}`}
            startIcon={<Add color='secondary'/>}
            onClick={handleVisibleInputs}
          >
            Оставлю еще данных
          </Button>
        </FormControl>
      </div>
    </section>
  );
}

export default Feedback;
