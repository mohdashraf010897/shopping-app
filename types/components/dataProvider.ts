import { ReactNode } from 'react';
import { Category, Product, ProductReview } from '../dataSource';

export type ContextDataType = {
  categories?: Category[];
  products?: Product[];
  reviews?: ProductReview[];
};

export type DataProviderProps = {
  children: ReactNode;
  initialData: ContextDataType;
};
