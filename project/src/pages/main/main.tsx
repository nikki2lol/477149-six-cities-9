import React from 'react';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import MainEmpty from '../../components/main-empty/main-empty';
import MainWithContent from '../../components/main-with-content/main-with-content';
import {useAppDispatch} from '../../hooks';
import clsx from 'clsx';
import {Offers} from '../../types/types';
import {getOfferId, resetOfferId} from '../../store/action';


type MainProps = {
  offers: Offers;
}

function Main ({offers} : MainProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onItemHover = (hoveredId: number) => {
    dispatch(getOfferId(hoveredId));
    const currentPoint = offers.find((offer) => offer.id === hoveredId);
    currentPoint ? dispatch(getOfferId(hoveredId)) : dispatch(resetOfferId());
  };

  const isOffersArrayEmpty = offers.length <= 0;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={clsx('page__main', 'page__main--index', isOffersArrayEmpty && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities/>
        </div>
        <div className="cities">
          {isOffersArrayEmpty
            ?
            <MainEmpty/>
            :
            <MainWithContent
              offers={offers}
              onItemHover={onItemHover}
            />}
        </div>
      </main>
    </div>
  );
}

export default Main;
