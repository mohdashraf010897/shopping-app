import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Category, Product, ProductReview } from '../dataSource';

export type ContextDataType = {
  categories?: Category[];
  products?: Product[];
  reviews?: ProductReview[];
  product?: Product;
  setData?: Dispatch<SetStateAction<ContextDataType | null>>;
};

export type PageDataProviderProps = {
  children: ReactNode;
  initialData?: ContextDataType | null;
};
