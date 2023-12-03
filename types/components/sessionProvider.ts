import { ReactNode } from 'react';

export type PersistorProviderDataType = {
  cart: Cart;
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
};
