export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Offers = Offer[];

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];

export type Offer = {
  id: number
  isFavorite: boolean
  isPremium: boolean
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
  city?: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  },
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  images?: [string]
  description?: string
  goods?: [string]
  host?: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}

