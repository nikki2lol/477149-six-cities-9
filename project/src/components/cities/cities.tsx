import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCity} from '../../store/action';
import {CITIES} from '../../const';
import clsx from 'clsx';

function Cities () {
  const { activeCity } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function handleClick(cityName: string) {
    dispatch(setCity(cityName));
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => (
          <li key={cityName} className="locations__item" onClick={()=>handleClick(cityName)}>
            <a className={clsx('locations__item-link', 'tabs__item', cityName === activeCity && 'tabs__item--active')} href={`#${cityName}`}>
              <span>{cityName}</span>
            </a>
          </li>))}
      </ul>
    </section>
  );
}
export default Cities;
