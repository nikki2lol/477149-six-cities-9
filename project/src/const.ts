export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferType {
  City = 'cities',
  Fav = 'favorites',
  Nearest = 'near-places',
}

export const RATING_STEP = 20;
export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';
export const ICON_WIDTH = 27;
export const ICON_HEIGHT = 39;

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
