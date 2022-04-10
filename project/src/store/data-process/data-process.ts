import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortingType, CITIES} from '../../const';
import { DataProcess } from '../../types/state';
import {filterOffers} from '../../helpers';

const initialState: DataProcess = {
  activeCity: CITIES.Paris,
  isOffersLoaded: false,
  offers: [],
  currentOffers: [],
  favorites: [],
  sortType: SortingType.POPULAR,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.currentOffers = filterOffers(state.offers, state.activeCity);
      state.isOffersLoaded = true;
    },
    setCurrentOffers: (state) => {
      state.currentOffers = filterOffers(state.offers, state.activeCity);
    },
    changeCity: (state, action) => {
      if (state.activeCity !== action.payload.name) {
        state.activeCity = action.payload;
      }
    },
    changeSortType: (state, action) => {
      if (state.sortType !== action.payload) {
        state.sortType = action.payload;
      }
    },
    loadFavoriteOffers: (state, action) => {
      state.favorites = action.payload;
    },
    setFavorites: (state, action) => {
      if (!action.payload.isFavorite) {
        state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
      }
      const index = state.offers.findIndex((item) => item.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1),
      ];
    },
  },
});

export const {
  loadOffers,
  setCurrentOffers,
  changeCity,
  changeSortType,
  loadFavoriteOffers,
  setFavorites,
} = dataProcess.actions;
