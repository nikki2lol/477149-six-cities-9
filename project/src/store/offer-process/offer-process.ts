import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferProcess } from '../../types/state';

export const INITIAL_OFFER = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 10,
    },
  },
  previewImage: '',
  images: [],
  title: '',
  isFavorite: false,
  isPremium: false,
  rating: 0,
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    isPro: false,
    avatarUrl: '',
  },
  description: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 10,
  },
  id: 666,
};

const initialState: OfferProcess = {
  roomDataLoaded: false,
  offersNearby: [],
  room: INITIAL_OFFER,
  offerId: INITIAL_OFFER.id,
  reviews: [],
};


export const offerProcess = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    loadOffer: (state, action) => {
      state.room = action.payload;
      state.roomDataLoaded = true;
    },
    loadNearbyOffers: (state, action) => {
      state.offersNearby = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    getOfferId: (state, action) => {
      state.offerId = action.payload;
    },
    resetOfferId: (state) => {
      state.offerId = 0;
    },
  },
});

export const {
  loadOffer,
  loadNearbyOffers,
  loadReviews,
  getOfferId,
  resetOfferId,
} = offerProcess.actions;
