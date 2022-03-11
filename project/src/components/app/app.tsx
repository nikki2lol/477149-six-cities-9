import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import NotFoundScreen from '../pages/no-found-screen/not-found-screen';
import Property from '../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import {MOCK_OFFERS} from '../../mocks/offers';
import {CITY} from '../../mocks/city';
import {POINTS} from '../../mocks/points';

type AppScreenProps = {
  placesCount?: number;
}

function App({placesCount = 300} : AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              placesCount={placesCount}
              offers={MOCK_OFFERS}
              city={CITY}
              points={POINTS}
            />
          }
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
          element={
            <Favorites
              offers={MOCK_OFFERS}
            />
          }
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
