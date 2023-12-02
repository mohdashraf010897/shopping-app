import { Category, Product, ProductReview } from '../dataSource';

export interface HomePageProps {
  categories: Category[];
  products: Product[];
  reviews: ProductReview[];
}
