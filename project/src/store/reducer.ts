import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './action';
import {CITIES} from '../const';
import {OFFERS} from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: OFFERS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
