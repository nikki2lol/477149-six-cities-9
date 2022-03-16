import {createReducer} from '@reduxjs/toolkit';
import {changeSorting, getOfferId, loadOffers, resetOfferId, setCity} from './action';
import {Offers} from '../types/types';
import {DEFAULT_CITY, SortingType} from '../const';

type InitialState = {
  activeCity: string,
  offers: Offers,
  isDataLoaded: boolean,
  sortingType: string,
  offerId: number,
}

const initialState : InitialState = {
  activeCity: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  sortingType: SortingType.POPULAR,
  offerId: 0,
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
    });
});

export {reducer};
