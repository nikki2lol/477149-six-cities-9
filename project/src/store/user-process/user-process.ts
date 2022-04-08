import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    id: 0,
    email: '',
    token: '',
    name: 'Не авторизован',
    avatarUrl: '',
    isPro: false,
  },
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, getUser} = userProcess.actions;
