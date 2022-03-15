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
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
  city: City,
  location: Location,
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
export type Offers = Offer[];
export type Point = Pick<Offer, 'id' | 'location'>;
export type Points = Point[];

