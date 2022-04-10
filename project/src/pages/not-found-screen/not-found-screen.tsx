import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import {notFoundScreenStyles} from './not-found-screen-styles';

function NotFoundScreen(): JSX.Element {

  return (
    <section className="page">
      <Header/>
      <section className="page__undefined" style={notFoundScreenStyles}>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFoundScreen;
