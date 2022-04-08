import { CITIES } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoriteItem from '../favorite-item/favorite-item';
import {Offers} from '../../types/types';
import {filterOffers} from '../../helpers';

function FavoriteList(): JSX.Element {
  const { favorites } = useAppSelector(({ DATA }) => DATA);

  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const favOffers: Offers = filterOffers(favorites, city);
        return favOffers.length !== 0 &&
          <FavoriteItem
            key={city.name}
            city={city}
            favOffers={favOffers}
          />;
      })}
    </ul>
  );
}

export default FavoriteList;
