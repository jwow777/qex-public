import React, {
  lazy,
  Suspense,
  useState,
} from 'react';
import { CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Policy from '../Policy/Policy';

const Footer = lazy(() => import('../Footer/Footer'));
const PopupFeedback = lazy(() => import('../PopupFeedback/PopupFeedback'));
const PopupPolicy = lazy(() => import('../PopupPolicy/PopupPolicy'));

function App() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const handleClickOpenFeedback = () => setOpenFeedback(true);
  const handleCloseFeedback = () => setOpenFeedback(false);

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleClickOpenPolicy = () => () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

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
              openPolicy={handleClickOpenPolicy}
            />
            <PopupFeedback
              openPolicy={handleClickOpenPolicy}
              open={openFeedback}
              close={handleCloseFeedback}
            />
            <PopupPolicy open={openPolicy} close={handleClosePolicy}/>
            <Footer/>
          </Suspense>
        </Route>
        <Route exact path='/policy'>
          <Policy/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
