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
  images?: [string]
  city?: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  }
  description?: string
  goods?: [string]
  host?: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  location?: {
    latitude: number
    longitude: number
    zoom: number
  }
}

export type Offers = Offer[];
