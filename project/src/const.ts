export const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';
export const DEFAULT_CITY = 'Paris';
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

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  data = 'DATA',
  offer = 'OFFER',
  user = 'USER',
  favorite = 'FAVORITE',
}

export const SortingType = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];
