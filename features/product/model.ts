export interface ProductModel {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  reviews: number;
}

export interface ProductResponseItem {
  id: number;
  title: string;
  description: string;
  rating: number;
  reviews: unknown[];
  thumbnail: string;
}

export interface ProductResponse {
  products: ProductResponseItem[];
  total: number;
  skip: number;
  limit: number;
}
