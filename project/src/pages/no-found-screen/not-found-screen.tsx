import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {

  const notFoundScreenStyles: React.CSSProperties = {
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <section className="page">
      <Header/>

      <section className="page__undefined" style={notFoundScreenStyles}>
        <h1>404. Page not found</h1>
        <Link to="/" style={{color: '#4481c3'}}>Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFoundScreen;
