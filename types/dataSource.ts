export interface MenuItem {
  title: string;
  href: string;
  submenu: MenuItem[];
}

export type Category = {
  id: string;
  title: string;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  discountedPrice?: number;
  sale: boolean;
  rating: number;
};

export type Review = {
  rating: number;
  comment: string;
  author: string;
  date: string;
};

export type ProductReview = {
  productId: string;
  reviews: Review[];
};