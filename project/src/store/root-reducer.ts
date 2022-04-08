import { combineReducers } from 'redux';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {dataProcess} from './data-process/data-process';
import {offerProcess} from './offer-process/offer-process';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

