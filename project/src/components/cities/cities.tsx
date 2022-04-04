import React from 'react';
import {useAppSelector} from '../../hooks';
import {CITIES} from '../../const';
import CitiesItem from '../cities-item/cities-item';

function Cities () {
  const activeCity = useAppSelector(({ DATA }) => DATA.activeCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((item, id) => {
          const cityKeyValue = `${id}: ${item.name}`;
          return <CitiesItem city={item} key={cityKeyValue} activeCity={activeCity} />;
        })}
      </ul>
    </section>
  );
}
export default Cities;
