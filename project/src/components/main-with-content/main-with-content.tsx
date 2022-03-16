import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/types';
import OffersList from '../offers-list/offers-list';
import React from 'react';
import Sorting from '../sorting/sorting';

type MainWithContentProps = {
  onItemHover: (value: number) => void,
  offers: Offers
}

function MainWithContent({onItemHover, offers}: MainWithContentProps): JSX.Element {
  const cityName = useAppSelector((state) => state.activeCity);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {cityName}</b>
        <Sorting/>
        <OffersList onItemHover={onItemHover}  offers={offers}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offers}/>
        </section>
      </div>
    </div>
  );
}

export default MainWithContent;
