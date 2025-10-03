export type Route = {
  label: string;
  href: string;
};
export type CategoryType = {
  slug: string;
  name: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];
};
export type ProductsResponse = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};
