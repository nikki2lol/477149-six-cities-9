import React, {useState} from 'react';
import {Offers} from '../../types/types';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import {CITIES} from '../../const';
import MainEmpty from '../../components/main-empty/main-empty';
import MainWithContent from '../../components/main-with-content/main-with-content';
import clsx from 'clsx';

type MainProps = {
  offers: Offers;
  activeCity: string;
}

function Main ({offers, activeCity} : MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const sortedByCityOffers = offers.filter((item) => item.city.name === activeCity);
  const isOffersArrayEmpty = sortedByCityOffers.length === 0;
  const points = sortedByCityOffers.map(({ id, location }) => ({ id, location }));
  const cityLocation = offers[0].city.location;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={clsx('page__main', 'page__main--index', isOffersArrayEmpty &&  'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities cities={CITIES} city={activeCity}/>
        </div>
        <div className="cities">
          {isOffersArrayEmpty
            ?
            <MainEmpty/>
            :
            <MainWithContent
              setActiveOffer={setActiveOffer}
              offers={sortedByCityOffers}
              city={cityLocation}
              points={points}
              selectedPoint={activeOffer}
            />}
        </div>
      </main>
    </div>
  );
}

export default Main;
