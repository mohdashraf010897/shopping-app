import React, { createContext, useState, useEffect, useRef } from 'react';
import {
  PersistorContextType,
  PersistorProviderDataType,
  PersistorProviderProps,
} from '@/types/components/sessionProvider';

export const PersistorContext = createContext<PersistorContextType | undefined>(undefined);

export const PersistorProvider: React.FC<PersistorProviderProps> = ({ children }) => {
  const [store, setStore] = useState<PersistorProviderDataType>({
    cart: {},
    cartDrawer: {
      isOpen: false,
    },
    products: [],
    categories: [],
    reviews: [],
  });
  const initialRender = useRef(true);

  useEffect(() => {
    setStore(prevData => {
      const sessionData = sessionStorage.getItem('data');
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        return { ...prevData, ...parsedData };
      }
      return prevData;
    });
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      sessionStorage.setItem('data', JSON.stringify(store));
    }
  }, [store]);

  const addToCart = (productId: string, quantity?: number) => {
    setStore((prevData: PersistorProviderDataType) => ({
      ...prevData,
      cart: {
        ...prevData.cart,
        [productId]: {
          itemsInCart: (prevData.cart[productId]?.itemsInCart || 0) + (quantity ?? 1),
        },
      },
    }));
  };

  const removeFromCart = (productId: string, quantity?: number) => {
    setStore((prevData: PersistorProviderDataType) => {
      const currentQuantity = prevData.cart[productId]?.itemsInCart || 0;
      const newQuantity = currentQuantity - (quantity ?? 1);

      if (newQuantity <= 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [productId]: _, ...restCart } = prevData.cart;
        return { ...prevData, cart: restCart };
      }

      return {
        ...prevData,
        cart: {
          ...prevData.cart,
          [productId]: {
            itemsInCart: newQuantity,
          },
        },
      };
    });
  };

  const toggleCartDrawer = () => {
    setStore((prevData: PersistorProviderDataType) => ({
      ...prevData,
      cartDrawer: {
        isOpen: !prevData.cartDrawer.isOpen,
      },
    }));
  };

  const addDataToStore = (data: Partial<PersistorProviderDataType>) => {
    setStore(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <PersistorContext.Provider
      value={{
        cart: store.cart,
        addToCart,
        removeFromCart,
        toggleCartDrawer,
        isCartDrawerOpen: store.cartDrawer.isOpen,
        products: store.products,
        addDataToStore,
      }}
    >
      {children}
    </PersistorContext.Provider>
  );
};
