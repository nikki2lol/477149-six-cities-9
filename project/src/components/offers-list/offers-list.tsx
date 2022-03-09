import {Offer} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import OfferCardFav from '../offer-card-fav/offer-card-fav';

type OffersListProps = {
  offers: Offer[];
  isFavList?: boolean;
}

function OffersList ({offers, isFavList}: OffersListProps) {
  return (
    <>{offers.map((offer : Offer, index : number)=> isFavList ? <OfferCardFav key={`offer-${index+1}`} {...offer}/> : <OfferCard key={`offer-${index+1}`} {...offer}/>)}</>
  );
}

export default OffersList;
