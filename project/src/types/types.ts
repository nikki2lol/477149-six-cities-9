export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};
export type Reviews = Review[];
export type NewReview = {
  roomId: number | null,
  comment: string,
  rating: number,
};

export type City = {
  location: Location,
  name: string,
}
export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type Offer = {
  id: number
  isFavorite: boolean
  isPremium: boolean
  bedrooms: number
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
  city: City,
  location: Location,
  images: string[]
  goods: string[]
  description?: string
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}
export type Offers = Offer[];
export type ErrorType = unknown;
export type NearbyOffer = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type NearbyOffers = NearbyOffer[];
export type OfferReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};
export type OfferReviews = OfferReview[];
export type FavoriteOffer = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
export type FavoriteOffers = FavoriteOffer[];
