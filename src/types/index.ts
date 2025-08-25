export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  ecoRating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Filters {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
}