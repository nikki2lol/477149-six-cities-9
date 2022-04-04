import React, {FormEvent, useEffect, useRef} from 'react';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-action';
import {AppRoute, AuthorizationStatus} from '../../const';
import {store} from '../../store';
import {redirectToRoute} from '../../store/action';

function Login () {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

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
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
