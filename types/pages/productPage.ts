import { Category, Product } from '../dataSource';

export interface ProductPageProps {
  product: Product;
  categories: Category[];
  products: Product[];
}
