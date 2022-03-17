import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {Offers} from '../types/types';
import {errorHandle} from '../services/error-handle';
import {getUser, loadOffers, redirectToRoute, requireAuthorization} from './action';
import {AuthData, UserData} from '../types/user';
import {dropToken, saveToken} from '../services/token';

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Hotels);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(getUser(data));
    } catch(error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const getUserAction = createAsyncThunk(
  'user/login',
  async () => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      store.dispatch(getUser(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
