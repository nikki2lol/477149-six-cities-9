import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFoundScreen from '../../pages/no-found-screen/not-found-screen';
import Property from '../../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import {sortOffers} from '../../helpers';
import LoadingScreen from '../loading-screen/loading-scree';

function App(): JSX.Element {
  const {offers, activeCity, sortingType} = useAppSelector((state) => state);
  const sortedOffers = sortOffers(offers, activeCity, sortingType);

  const {isDataLoaded} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={sortedOffers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites offers={offers}/>}
        />
        <Route
          path={AppRoute.Room}
          element={<Property/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
