import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoritesAction} from '../../store/api-action';
import Header from '../../components/header/header';
import FavoriteScreenEmpty from '../../components/favorite-screen-empty/favorite-screen-empty';
import FavoriteScreen from '../../components/favorite-screen/favorite-screen';


function Favorites(): JSX.Element {
  const {favorites} = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, []);

  return (
    <div className="page">
      <Header />
      {favorites.length === 0 ?
        <FavoriteScreenEmpty /> :
        <FavoriteScreen />}
    </div>
  );
}

export default Favorites;
