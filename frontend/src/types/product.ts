export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  stock: number;
  rating: number;
  reviewsCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: Product[];
}

export type ProductSort = "newest" | "price-asc" | "price-desc" | "rating";

export type ProductFilters = {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: ProductSort;
  page?: number;
  limit?: number;
};