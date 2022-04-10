export const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';
export const RATING_STEP = 20;
export const ICON_WIDTH = 27;
export const ICON_HEIGHT = 39;
export const DEFAULT_TIMEOUT = 5000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/',
  NotFound = '/not-found',
}
export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/hotels',
  Fav = '/favorite',
  Comments = '/comments',
  Nearby = '/nearby',
}

export enum OfferType {
  City = 'cities',
  Fav = 'favorites',
  Nearest = 'near-places',
}

export enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const SortingType = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

export const CITIES = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};
