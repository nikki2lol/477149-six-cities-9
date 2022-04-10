import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {FavoriteOffers, NearbyOffers, Offer, OfferReviews, Offers} from './types';
import {UserData} from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData
};

export type DataProcess = {
  activeCity: string,
  isOffersLoaded: boolean,
  offers: Offers,
  currentOffers: Offers,
  sortType: string,
  favorites: FavoriteOffers,
};

export type OfferProcess = {
  offersNearby: NearbyOffers,
  room: Offer,
  offerId: number,
  reviews: OfferReviews,
  roomDataLoaded: boolean,
}
