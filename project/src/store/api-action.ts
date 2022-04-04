import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  FavoriteOffers,
  NearbyOffers, NewReview,
  Offer,
  Offers,
  Review
} from '../types/types';
import {AuthData, UserData} from '../types/user';
import {errorHandle} from '../services/error-handle';
import {redirectToRoute} from './action';
import {dropToken, saveToken} from '../services/token';
import {loadNearbyOffers, loadOffer, loadReviews} from './offer-process/offer-process';
import {getUser, requireAuthorization} from './user-process/user-process';
import {loadFavoriteOffers, loadOffers, setFavorites} from './data-process/data-process';


const ACTIONS = {
  setCity: 'data/setCity',
  loadOffers: 'data/loadOffers',
  loadOffer: 'data/loadOffer',
  changeSorting: 'data/changeSorting',
  getOfferId: 'offer/getOfferId',
  resetOfferId: 'offer/resetOfferId',
  requireAuthorization: 'user/requireAuthorization',
  redirectToRoute: 'user/redirectToRoute',
  getUser: 'user/getUser',
  login: 'user/login',
  logout: 'user/logout',
  loadNearbyOffers: 'data/fetchNearbyOffers',
  loadReviews: 'data/fetchReviews',
  sendReview: 'data/sendReview',
  loadFavOffers: 'data/fetchFavoriteOffers',
  changeFavStatus: 'data/fetchChangeStatusOffer',
};


export const fetchOffersAction = createAsyncThunk(
  ACTIONS.loadOffers,
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferAction = createAsyncThunk(
  ACTIONS.loadOffer,
  async (id: number | null) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchOffersNearbyAction = createAsyncThunk(
  ACTIONS.loadNearbyOffers,
  async (id: number | null) => {
    try {
      const {data} = await api.get<NearbyOffers>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      store.dispatch(loadNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  ACTIONS.loadReviews,
  async (id: number | null = null) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  ACTIONS.sendReview,
  async ({ roomId, comment, rating }: NewReview) => {
    try {
      const { data } = await api.post<NewReview[]>(`${APIRoute.Comments}/${roomId}`, { comment, rating });
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk(
  ACTIONS.loadFavOffers,
  async () => {
    try {
      const {data} = await api.get<FavoriteOffers>(APIRoute.Fav);
      store.dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const setFavoritesAction = createAsyncThunk(
  ACTIONS.loadFavOffers,
  async ({id, isFavorite} : Offer) => {
    try {
      const {data} = await api.post<Offer>(`${APIRoute.Fav}/${id}/${Number(isFavorite)}`);
      store.dispatch(setFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  ACTIONS.requireAuthorization,
  async () => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(getUser(data));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  ACTIONS.login,
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(getUser(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  ACTIONS.logout,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
