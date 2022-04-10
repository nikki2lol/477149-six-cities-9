import React, {ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState} from 'react';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-action';
import {AppRoute, AuthorizationStatus, CITIES} from '../../const';
import {store} from '../../store';
import {redirectToRoute} from '../../store/action';
import {Link} from 'react-router-dom';
import {changeCity} from '../../store/data-process/data-process';
import {getRandomInteger} from '../../helpers';

function Login () {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const [isValidPassword, setIsValidPassword] = useState(false);
  const cities = Object.values(CITIES);
  const [randomCity, setRandomCity] = useState(cities[0]);
  const checkValidity = (password: string) => /^[0-9]+[A-Z]+|[A-Z]+[0-9]+$/i.test(password) ? setIsValidPassword(true) : setIsValidPassword(false);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const handleCityChange = useCallback(()=> store.dispatch(changeCity(randomCity)), [randomCity]);

  useEffect(()=>{
    setRandomCity(cities[getRandomInteger(0, cities.length - 1)]);
    handleCityChange();
  },[]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth){
      store.dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [authorizationStatus]);

  const handleSubmit = (evt: FormEvent)=>{
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
    handleCityChange();
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    passwordRef.current !== null && checkValidity(passwordRef.current.value);
  };

  return (
    <div className="page page--gray page--login">
      <Header navigation={false}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  onChange={handlePasswordChange}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isValidPassword}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                to={'/'}
                className="locations__item-link"
                onClick={handleCityChange}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
