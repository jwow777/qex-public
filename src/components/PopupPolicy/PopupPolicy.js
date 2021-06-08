import React from 'react';
import './PopupPolicy.css';
import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import Policy from '../Policy/Policy';

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 900,
      maxHeight: '90vh',
      width: 'calc(100% - 64px)',
      boxSizing: 'border-box',
      padding: '10px 0 30px',
      borderRadius: 10,
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 32px)',
        maxHeight: '80vh',
        margin: 16,
        padding: '20px 0',
      },
    },
  },
}));

function PopupPolicy({ open, close }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={close}
      className={classes.container}
    >
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
        className='popup-scroll__title-box'
      >
        <h2 className='popup-scroll__title'>
          Политика в отношении обработки персональных данных
        </h2>
        <IconButton onClick={close} className='popup__close'>
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
