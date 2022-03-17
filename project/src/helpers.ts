import {RATING_STEP, SortingType} from './const';
import {Offers} from './types/types';

export const calcPercent = (rating : number) => `${RATING_STEP * rating}%`;

export const sortOffers = (offers: Offers, city: string, type: string ) => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  switch (type) {
    case SortingType.PRICE_TO_HIGH:
      return filteredOffers.sort((a, b) => a.price-b.price );
    case SortingType.PRICE_TO_LOW:
      return filteredOffers.sort((a, b) => b.price-a.price );
    case SortingType.TOP:
      return filteredOffers.sort((a, b) => b.rating-a.rating );
    default:
      return filteredOffers;
  }
};
