import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const {authorizationStatus, user} = useAppSelector(({USER}) => USER);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link
              to={AppRoute.Login}
              className="header__nav-link"
            >
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              to={AppRoute.Favorites}
              title='/favorites'
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img className="header__avatar user__avatar" src={user.avatarUrl} alt={user.name} />
              </div>
              <span className="header__user-name user__name">{user.email}</span>
            </Link>
          </li>
          <li  className="header__nav-item">
            <Link
              to={AppRoute.Room}
              onClick={
                (evt)=>{
                  evt.preventDefault();
                  dispatch(logoutAction());
                }
              }
              className="header__nav-link"
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
