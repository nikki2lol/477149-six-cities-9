import {Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router';
import Room from '../../pages/room/room';


function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <ToastContainer />
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Room}
          element={<Room />}
        >
          <Route
            path=':id'
            element={<Room />}
          />
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
        <Route path='*' element={<NotFoundScreen />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
