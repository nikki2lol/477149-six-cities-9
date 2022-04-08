import {fetchOffersNearbyAction, fetchOfferAction, fetchReviewsAction} from './store/api-action';
import {store} from './store';

export const dispatchOfferData = (id: number | null) => {
  store.dispatch(fetchOfferAction(id));
  store.dispatch(fetchReviewsAction(id));
  store.dispatch(fetchOffersNearbyAction(id));
};
