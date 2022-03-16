import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/types';

export const setCity = createAction<string>('main/setCity');

export const loadOffers = createAction<Offers>('main/loadOffers');

export const changeSorting = createAction<string>('main/changeSorting');

export const getOfferId = createAction<number>('offer/getOfferId');

export const resetOfferId = createAction('offer/resetOfferId');
