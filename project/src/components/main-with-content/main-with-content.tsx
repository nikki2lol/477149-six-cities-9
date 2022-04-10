import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import OffersList from '../offers-list/offers-list';
import React from 'react';
import Sorting from '../sorting/sorting';
import LoadingScreen from '../loading-screen/loading-scree';
import {sortOffers} from '../../helpers';

type MainWithContentProps = {
  onItemHover: (value: number) => void,
}

function MainWithContent({onItemHover}: MainWithContentProps): JSX.Element {
  const {offers, activeCity, isOffersLoaded, sortType} = useAppSelector(({DATA}) => DATA);
  const sortedOffers = sortOffers(offers, activeCity, sortType);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
        <Sorting/>
        <OffersList offers={sortedOffers}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={sortedOffers}/>
        </section>
      </div>
    </div>
  );
}

export default MainWithContent;
