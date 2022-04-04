import React from 'react';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import MainEmpty from '../../components/main-empty/main-empty';
import MainWithContent from '../../components/main-with-content/main-with-content';
import {useAppDispatch, useAppSelector} from '../../hooks';
import clsx from 'clsx';
import {getOfferId, resetOfferId} from '../../store/offer-process/offer-process';
import LoadingScreen from '../../components/loading-screen/loading-scree';


function Main () {
  const isOffersLoaded = useAppSelector(({ DATA }) => DATA.isOffersLoaded);
  const offers = useAppSelector(({ DATA }) => DATA.offers);
  const dispatch = useAppDispatch();

  const onItemHover = (hoveredId: number) => {
    dispatch(getOfferId(hoveredId));
    const currentPoint = offers.find((offer) => offer.id === hoveredId);
    currentPoint ? dispatch(getOfferId(hoveredId)) : dispatch(resetOfferId());
  };

  const isOffersArrayEmpty = offers.length === 0;

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={clsx('page__main', 'page__main--index', isOffersArrayEmpty && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities/>
        </div>
        <div className="cities">
          {isOffersLoaded && isOffersArrayEmpty ? <MainEmpty/> : <MainWithContent onItemHover={onItemHover}/>}
        </div>
      </main>
    </div>
  );
}

export default Main;
