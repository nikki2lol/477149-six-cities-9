import React from 'react';
import {useAppSelector} from '../../hooks';
import CitiesItem from '../cities-item/cities-item';
import {CITIES} from '../../const';

function Cities () {
  const activeCity = useAppSelector(({ DATA }) => DATA.activeCity);
  const cities = Object.values(CITIES);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city : string) => <CitiesItem key={city} city={city} activeCity={activeCity}/>,
        )}
      </ul>
    </section>
  );
}
export default Cities;
