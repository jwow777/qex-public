import React, { lazy } from 'react';
import './Main.css';
import ReadyServices from '../ReadyServices/ReadyServices';

const Services = lazy(() => import('../Services/Services'));
const Whyme = lazy(() => import('../Whyme/Whyme'));
const Clients = lazy(() => import('../Clients/Clients'));
const We = lazy(() => import('../We/We'));
const AboutUs = lazy(() => import('../AboutUs/AboutUs'));
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
      <AboutUs />
      <Feedback openPolicy={openPolicy}/>
      <Contacts />
    </main>
  );
}

export default Main;
