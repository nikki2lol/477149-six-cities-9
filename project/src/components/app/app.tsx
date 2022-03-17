import { Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {sortOffers} from '../../helpers';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFoundScreen from '../../pages/no-found-screen/not-found-screen';
import Property from '../../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-scree';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
  const {offers, activeCity, sortingType} = useAppSelector((state) => state);
  const sortedOffers = sortOffers(offers, activeCity, sortingType);
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (!isDataLoaded || authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ToastContainer />
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={sortedOffers} />}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Property/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFoundScreen />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
