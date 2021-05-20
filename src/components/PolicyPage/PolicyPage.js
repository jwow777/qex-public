import React from 'react';
import Policy from '../Policy/Policy';
// import { Link } from 'react-router-dom';
// import { Button, makeStyles } from '@material-ui/core';
import './PolicyPage.css';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     height: 70,
//     width: 170,
//     background: '#2E9BFF',
//     borderRadius: 3,
//     fontFamily: '"Inter", sans-serif',
//     fontStyle: 'normal',
//     fontWeight: 600,
//     fontSize: 30,
//     lineHeight: '36px',
//     color: '#fff',
//     marginTop: 30,
//     textTransform: 'none',
//     [theme.breakpoints.down('xs')]: {
//       height: 55,
//       width: 150,
//       fontWeight: 500,
//       fontSize: 25,
//       lineHeight: '30px',
//       marginTop: 0,
//     },
//     '&:hover': {
//       background: '#2E9BFF',
//     },
//   },
// }));

function PolicyPage() {
  // const classes = useStyles();
  return (
    <main className='policy-page'>
      <div className='policy-page__container'>
        <Policy/>
      </div>
    </main>
  );
}

export default PolicyPage;
