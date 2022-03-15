import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { Offers, Location } from '../../types/types';
import OffersList from '../offers-list/offers-list';
import React from 'react';

type MainWithContentProps = {
  setActiveOffer: (value: number | null) => void,
  offers: Offers,
  city: Location,
  points: { id: number, location: Location }[],
  selectedPoint: number | null,
}

function MainWithContent({setActiveOffer, offers, city, points, selectedPoint}: MainWithContentProps): JSX.Element {
  const cityName = useAppSelector((state) => state.city);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {cityName}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"/>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <OffersList setActiveOffer={setActiveOffer}  offers={offers}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={city} points={points} selectedPoint={selectedPoint}/>
        </section>
      </div>
    </div>
  );
}

export default MainWithContent;
