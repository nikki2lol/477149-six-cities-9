import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/types';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offers>('main/setOffers');
