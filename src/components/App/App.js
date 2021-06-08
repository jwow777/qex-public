/* eslint-disable no-unused-vars */
import React, {
  lazy,
  Suspense,
  useState,
} from 'react';
import { CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PolicyPage from '../PolicyPage/PolicyPage';
import NotFound from '../NotFound/NotFound';

import Footer from '../Footer/Footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import PopupSuccess from '../PopupSuccess/PopupSuccess';

const PopupFeedback = lazy(() => import('../PopupFeedback/PopupFeedback'));
const PopupReadyServices = lazy(() => import('../PopupReadyServices/PopupReadyServices'));
const PopupPolicy = lazy(() => import('../PopupPolicy/PopupPolicy'));

function App() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const handleClickOpenFeedback = () => setOpenFeedback(true);
  const handleCloseFeedback = () => setOpenFeedback(false);

  const [openReadyServices, setOpenReadyServices] = useState(false);
  const [readyServiceData, setReadyServiceData] = useState({});
  const handleClickOpenReadyServices = () => setOpenReadyServices(true);
  const handleCloseReadyServices = () => setOpenReadyServices(false);

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleClickOpenPolicy = () => () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

  const [openSuccess, setOpenSuccess] = useState(false);
  const handleClickOpenSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);

  // Данные для формы

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header onFeedback={handleClickOpenFeedback}/>
          <Suspense
            fallback={
              <div className='page__progress'>
                <CircularProgress />
              </div>
            }
          >
            <Main
              onReadyServices={handleClickOpenReadyServices}
              dataService={setReadyServiceData}
              openPolicy={handleClickOpenPolicy}
              openSuccess={handleClickOpenSuccess}
              closeSuccess={handleCloseSuccess}
            />
            <PopupFeedback
              openPolicy={handleClickOpenPolicy}
              openSuccess={handleClickOpenSuccess}
              open={openFeedback}
              close={handleCloseFeedback}
              closeSuccess={handleCloseSuccess}
            />
            <PopupReadyServices
              open={openReadyServices}
              close={handleCloseReadyServices}
              data={readyServiceData}
            />
            <PopupPolicy open={openPolicy} close={handleClosePolicy}/>
            <PopupSuccess open={openSuccess} close={handleCloseSuccess}/>
          </Suspense>
          <Footer/>
        </Route>
        <Route path='/policy'>
          <HeaderMenu policy={true}/>
          <PolicyPage/>
          <Footer/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
