import { ReactNode } from 'react';
import { Category, Product, ProductReview } from '../dataSource';

export type PersistorProviderDataType = {
  cart: Cart;
  cartDrawer: {
    isOpen: boolean;
  };
  products?: Product[];
  categories?: Category[];
  reviews?: ProductReview[];
  // other data types can be added here
};

export type Cart = {
  [productId: string]: {
    itemsInCart: number;
  };
};

export type PersistorProviderProps = {
  children: ReactNode;
};

export type PersistorContextType = {
  cart: Cart;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string, quantity?: number) => void;
  toggleCartDrawer: () => void;
  isCartDrawerOpen: boolean;
  products?: Product[];
  addDataToStore: (data: Partial<PersistorProviderDataType>) => void;
};
