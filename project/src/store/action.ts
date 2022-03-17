import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/types';
import {UserData} from '../types/user';
import {AppRoute, AuthorizationStatus} from '../const';

export const setCity = createAction<string>('data/setCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const changeSorting = createAction<string>('data/changeSorting');

export const getOfferId = createAction<number>('offer/getOfferId');

export const resetOfferId = createAction('offer/resetOfferId');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const getUser = createAction<UserData>('user/getUser');
