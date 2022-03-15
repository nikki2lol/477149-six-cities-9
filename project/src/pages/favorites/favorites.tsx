import React from 'react';
import Header from '../../components/header/header';
import {Offers} from '../../types/types';
import OffersList from '../../components/offers-list/offers-list';
import {OfferType} from '../../const';

type FavProps = {
  offers: Offers
}

function Favorites ({offers} : FavProps){
  return (
    <div className="page">

      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers && <OffersList offers={offers} offerListType={OfferType.Fav}/>}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers && <OffersList offers={offers} offerListType={OfferType.Fav}/>}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Favorites;