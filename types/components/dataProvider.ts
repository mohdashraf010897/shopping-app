import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Category, Product, ProductReview } from '../dataSource';

export type ContextDataType = {
  categories?: Category[];
  products?: Product[];
  reviews?: ProductReview[];
  setData?: Dispatch<SetStateAction<ContextDataType | null>>;
};

export type GlobalDataProviderProps = {
  children: ReactNode;
  initialData?: ContextDataType | null;
};
