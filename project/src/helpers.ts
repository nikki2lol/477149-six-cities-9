import {RATING_STEP} from './const';

export const calcPercent = (rating : number) => `${RATING_STEP * rating}%`;
