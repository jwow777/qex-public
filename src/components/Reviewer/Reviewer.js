import React, { useState } from 'react';
import './Reviewer.css';
import {
  Fade,
  Modal,
  Popover,
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
// import letterI from '../../images/aboutus/letter.png';

function Reviewer({ data }) {
  const {
    name,
    company,
    companyCountry,
    position,
    review,
    photo,
    letter,
  } = data;

  const [openLetter, setOpenLetter] = useState(false);
  const handleOpenLetter = () => setOpenLetter(true);
  const handleCloseLetter = () => setOpenLetter(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (e) => setAnchorEl(e.target.closest('li'));
  const handlePopoverClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const sizeReview = (rev) => {
    const lengthReview = rev.split(' ').slice(0, 50).length;
    const cutReview = rev.split(' ').slice(0, 50).join(' ');
    if (lengthReview < 50) {
      return rev;
    }
    return (
      <>
        <span>{cutReview}</span>
        <button className='review__extra' onClick={handlePopoverOpen}>
          <span className='review__extra-text'>ещё</span>
        </button>
      </>
    );
  };

  return (
    <>
      <li className='reviewer'>
        <div className='reviewer__block'>
          <img src={photo} alt={name} className='reviewer__photo' />
          <h3 className='reviewer__name'>{name}</h3>
          <div className='reviewer__company-block'>
            {
              company.startsWith('/images/')
                ? <img src={company} alt='Компания' className='reviewer__company-image'/>
                : <p className='reviewer__company-title'>{company}</p>
            }
            {
              companyCountry
                ? <img src={companyCountry} alt='Страна'/>
                : ''
            }
          </div>
          <p className='reviewer__position'>{position}</p>
        </div>
        <p className='reviewer__text' onClick={handlePopoverOpen}>{sizeReview(review)}</p>
        {
          letter
            ? <div className='reviewer__document-block' onClick={handleOpenLetter}>
                <img
                  src={letter}
                  alt='Благодарственное письмо'
                  className='reviewer__letter-image'
                />
                <span className='reviewer__letter-name'>Благодарственное письмо</span>
              </div>
            : ''
        }
      </li>
      <Modal
        className='reviewer__letter-modal'
        open={openLetter}
        onClose={handleCloseLetter}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLetter}>
          <div className='reviewer__letter-modal-content'>
            <img
              src={letter}
              alt='Благодарственное письмо'
              className='reviewer__letter-modal-image'
            />
          </div>
        </Fade>
      </Modal>
      <Popover
        open={open}
        onClose={handlePopoverClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <li className='reviewer reviewer_popup'>
          <div className='reviewer__block'>
            <img src={photo} alt={name} className='reviewer__photo' />
            <h3 className='reviewer__name'>{name}</h3>
            <div className='reviewer__company-block'>
              {
                company.startsWith('/images/')
                  ? <img src={company} alt='Компания' className='reviewer__company-image'/>
                  : <p className='reviewer__company-title'>{company}</p>
              }
              {
                companyCountry
                  ? <img src={companyCountry} alt='Страна'/>
                  : ''
              }
            </div>
            <p className='reviewer__position'>{position}</p>
          </div>
          <p className='reviewer__text reviewer__text_popup'>
            {review}
          </p>
          {
            letter
              ? <div className='reviewer__document-block reviewer__document-block_popup' onClick={handleOpenLetter}>
                  <img
                    src={letter}
                    alt='Благодарственное письмо'
                    className='reviewer__letter-image reviewer__letter-image_popup'
                  />
                  <span className='reviewer__letter-name reviewer__letter-name_popup'>Благодарственное письмо</span>
                </div>
              : ''
          }
        </li>
        <div className='reviewer__close-box' onClick={handlePopoverClose}>
          <p className='reviewer__close'>скрыть</p>
        </div>
      </Popover>
    </>
  );
}

export default Reviewer;
