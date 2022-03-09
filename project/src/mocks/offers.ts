import {Offers} from '../types/offers';

export const MOCK_OFFERS: Offers = [
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
  },
];