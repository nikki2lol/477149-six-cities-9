import {Offers} from '../types/types';

export const OFFERS: Offers = [
  {
    id: 1,
    previewImage: '/img/apartment-01.jpg',
    isPremium: false,
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    maxAdults: 2,
    price: 100,
    rating: 2,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 2,
    previewImage: '/img/apartment-02.jpg',
    isPremium: true,
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    type: 'Private Room',
    maxAdults: 4,
    price: 120,
    rating: 5,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 3,
    previewImage: '/img/apartment-03.jpg',
    isPremium: false,
    isFavorite: true,
    title: 'Wood and stone place',
    type: 'House',
    maxAdults: 2,
    price: 99,
    rating: 3,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 4,
    previewImage: '/img/apartment-01.jpg',
    isPremium: true,
    isFavorite: true,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Hotel',
    maxAdults: 3,
    price: 199,
    rating: 4,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
];

export const OFFERS_NEAR: Offers = [
  {
    id: 1,
    previewImage: '/img/apartment-01.jpg',
    isPremium: false,
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    maxAdults: 2,
    price: 100,
    rating: 2,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 2,
    previewImage: '/img/apartment-02.jpg',
    isPremium: true,
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    type: 'Private Room',
    maxAdults: 4,
    price: 120,
    rating: 5,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 3,
    previewImage: '/img/apartment-03.jpg',
    isPremium: false,
    isFavorite: true,
    title: 'Wood and stone place',
    type: 'House',
    maxAdults: 2,
    price: 99,
    rating: 3,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
];
