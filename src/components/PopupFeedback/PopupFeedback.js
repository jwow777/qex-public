import React from 'react';
import { Typography } from '@material-ui/core';
import Popup from '../Popup/Popup';
import FormFeedback from '../FormFeedback/FormFeedback';
import './PopupFeedback.css';

function PopupFeedback({
  open, close, openPolicy, openSuccess, closeSuccess,
}) {
  return (
    <Popup
      open={open}
      close={close}
      classContainer='feedback'
    >
      <Typography
        variant='h2'
        align='center'
        className='popup__title popup__title_feedback'
      >
        Обратная связь
      </Typography>
      <FormFeedback
        openPolicy={openPolicy}
        openSuccess={openSuccess}
        closeFeedbackPopup={close}
        closePopupSuccess={closeSuccess}
      />
    </Popup>
  );
}

export default PopupFeedback;
