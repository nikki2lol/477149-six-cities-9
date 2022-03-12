import {Offer} from '../../types/types';
import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../const';

type OffersListProps = {
  offers: Offer[];
  offerListType?: string;
}

function OffersList ({offers, offerListType = OfferType.Main}: OffersListProps) {
  return (
    <>{offers.map((offer : Offer, index : number)=> <OfferCard key={`offer-${index+1}`} offerListType={offerListType} {...offer}/>)}</>
  );
}

export default OffersList;
