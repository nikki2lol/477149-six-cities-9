import { combineReducers } from 'redux';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {dataProcess} from './data-process/data-process';
import {offerProcess} from './offer-process/offer-process';

export const rootReducer = combineReducers({
  [NameSpace.offer]: offerProcess.reducer,
  [NameSpace.data]: dataProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});

