import {Offer} from '../../types/types';
import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../const';
import clsx from 'clsx';

type OffersListProps = {
  offers: Offer[];
  offerListType?: string;
}

function OffersList ({offers, offerListType = OfferType.City}: OffersListProps) {
  return (
    <div className={clsx(
      'places__list',
      offerListType === OfferType.City && 'cities__places-list tabs__content',
      offerListType === OfferType.Nearest && 'near-places__list',
    )}
    >
      {offers.map((offer : Offer)=> <OfferCard key={offer.id} offerListType={offerListType} {...offer}/>)}
    </div>
  );
}

export default OffersList;
