import React from 'react';
import './PopupPolicy.css';
import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import Policy from '../Policy/Policy';

function PopupPolicy({ open, close }) {
  return (
    <Dialog
      open={open}
      onClose={close}
      className='popup-scroll'
    >
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
        className='popup-scroll__title-box'
      >
        <Typography
          variant='h2'
          className='popup-scroll__title'
        >
          Политика в отношении обработки персональных данных
        </Typography>
        <IconButton onClick={close}>
          <Clear />
        </IconButton>
      </Grid>
      <DialogContent>
        <Policy/>
      </DialogContent>
    </Dialog>
  );
}

export default PopupPolicy;
