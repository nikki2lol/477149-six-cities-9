import {createReducer} from '@reduxjs/toolkit';
import {changeSorting, getOfferId, getUser, loadOffers, requireAuthorization, resetOfferId, setCity} from './action';
import {Offers} from '../types/types';
import {AuthorizationStatus, DEFAULT_CITY, SortingType} from '../const';
import {UserData} from '../types/user';

type InitialState = {
  activeCity: string,
  offers: Offers,
  isDataLoaded: boolean,
  sortingType: string,
  offerId: number,
  authorizationStatus: AuthorizationStatus,
  user: UserData,
}

const initialState : InitialState = {
  activeCity: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  sortingType: SortingType.POPULAR,
  offerId: 0,
  authorizationStatus: AuthorizationStatus.Auth,
  user: {
    id: 0,
    email: '',
    token: '',
    name: 'Не авторизован',
    avatarUrl: '',
    isPro: false,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeSorting, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(getOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(resetOfferId, (state) => {
      state.offerId = 0;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
