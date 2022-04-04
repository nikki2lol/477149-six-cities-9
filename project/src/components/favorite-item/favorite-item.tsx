import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {City, Offers} from '../../types/types';
import {AppRoute, OfferType} from '../../const';
import {changeCity} from '../../store/data-process/data-process';
import OffersList from '../offers-list/offers-list';

type FavoriteItemProps = {
  city: City;
  favOffers: Offers;
};

function FavoriteItem({city, favOffers}: FavoriteItemProps) {
  const dispatch = useAppDispatch();

  const changeCityHandler = (): void => {
    dispatch(changeCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Main}
            onClick={changeCityHandler}
          >
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={favOffers} offerListType={OfferType.Fav}/>
      </div>
    </li>
  );
}

export default FavoriteItem;

