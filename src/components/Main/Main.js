import React, { lazy } from 'react';
import './Main.css';
import ReadyServices from '../ReadyServices/ReadyServices';

const Services = lazy(() => import('../Services/Services'));
const Whyme = lazy(() => import('../Whyme/Whyme'));
const Clients = lazy(() => import('../Clients/Clients'));
const We = lazy(() => import('../We/We'));
const Feedback = lazy(() => import('../Feedback/Feedback'));
const Contacts = lazy(() => import('../Contacts/Contacts'));

function Main(
  {
    onReadyServices,
    dataService,
    openPolicy,
  },
) {
  return (
    <main className='content'>
      <ReadyServices openPopup={onReadyServices} dataService={dataService}/>
      <Services />
      <Whyme />
      <Clients />
      <We />
      <Feedback openPolicy={openPolicy}/>
      <Contacts />
    </main>
  );
}

export default Main;
