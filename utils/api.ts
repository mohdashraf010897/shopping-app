import { BASE_URL } from '@/constants/api';
import { Category, Product, ProductReview } from '../types/dataSource';

export const fetchCategories = async (): Promise<Category[] | null> => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    const { categories } = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};

export const fetchProducts = async (): Promise<Product[] | null> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

export const fetchProductBySlug = async (slug: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${BASE_URL}/product/${slug}`);
    console.log('🚀 ~ file: api.ts:30 ~ fetchProductBySlug ~ response:', response);
    const { product } = await response.json();
    console.log('🚀 ~ file: api.ts:30 ~ fetchProductBySlug ~ product:', product);
    return product;
  } catch (error) {
    console.error(`Error fetching product with id ${slug}:`, error);
    return null;
  }
};

export const fetchReviews = async (): Promise<ProductReview[] | null> => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`);
    const { reviews } = await response.json();
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return null;
  }
};
