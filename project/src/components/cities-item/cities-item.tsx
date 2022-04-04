import React from 'react';
import { useAppDispatch } from '../../hooks';
import {changeCity} from '../../store/data-process/data-process';
import {City} from '../../types/types';
import clsx from 'clsx';

type LocationItemProps = {
  activeCity: City;
  city: City;
};

function CitiesItem({city, activeCity}: LocationItemProps) {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a
        className={clsx('locations__item-link', 'tabs__item', city.name === activeCity.name && 'tabs__item--active')}
        href={`${city}`}
        onClick={(e) => {
          e.preventDefault();
          dispatch(changeCity(city));
        }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
