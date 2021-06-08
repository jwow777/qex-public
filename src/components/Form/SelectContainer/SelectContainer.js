import React from 'react';
import {
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import {
  LocalPhoneRounded,
  MailOutlineRounded,
  Telegram,
  WhatsApp,
} from '@material-ui/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const useStyles = makeStyles(() => ({
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
}));

function SelectContainer({
  state,
  handleChange,
  handleChangePhone,
  classNameContainer,
}) {
  const classes = useStyles();
  return (
    <div className={`${classNameContainer}__phone-block`}>
      <Select
        name='communication'
        defaultValue={state.communication}
        value={state.communication}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value='call'>
          <LocalPhoneRounded className={`${classNameContainer}__select-image`}/>
          Звонок
        </MenuItem>
        <MenuItem value='whatsapp'>
          <WhatsApp className={`${classNameContainer}__select-image`}/>
          WhatsApp
        </MenuItem>
        <MenuItem value='telegram'>
          <Telegram className={`${classNameContainer}__select-image`}/>
          Telegram
        </MenuItem>
        <MenuItem value='email'>
          <MailOutlineRounded className={`${classNameContainer}__select-image`}/>
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
          containerClass={`${classNameContainer}__input-phone-block`}
          inputClass={`${classNameContainer}__input-phone`}
          buttonClass={`${classNameContainer}__button-phone`}
        />
      )}
    </div>
  );
}

export default SelectContainer;
