import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__navigation'>
          <nav>
            <h3 className='footer__title'>Продукты</h3>
            <ul className='list footer__list'>
              <li>
                <a href='http://eris.bz/' className='link footer__link'>
                  Eris - документы
                </a>
              </li>
              <li>
                <a href='http://vol.bz/' className='link footer__link'>
                  VOL - мессенджер
                </a>
              </li>
              <li>
                <a href='http://estraid.com/' className='link footer__link'>
                  Estraid - недвижимость
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer__politics-box'>
          <div className='footer__politics'>
            <Link to='/policy' className='link footer__link'>
              Политика конфиденциальности
            </Link>
          </div>
          <p className='footer__copyright'>
            QEX © 2017-2021 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
