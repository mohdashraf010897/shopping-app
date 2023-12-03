import React, { createContext, useState, useEffect, useRef } from 'react';
import {
  PersistorContextType,
  PersistorProviderDataType,
  PersistorProviderProps,
} from '@/types/components/sessionProvider';

export const PersistorContext = createContext<PersistorContextType | undefined>(undefined);

export const PersistorProvider: React.FC<PersistorProviderProps> = ({ children }) => {
  const [data, setData] = useState<PersistorProviderDataType>({ cart: {} });
  const initialRender = useRef(true);

  useEffect(() => {
    setData(prevData => {
      const sessionData = sessionStorage.getItem('data');
      console.log('🚀 ~ file: PersistorProvider.tsx:17 ~ useEffect ~ sessionData:', sessionData);
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
      sessionStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);

  const addToCart = (productId: string, quantity?: number) => {
    setData((prevData: PersistorProviderDataType) => ({
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
    setData((prevData: PersistorProviderDataType) => {
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

  return (
    <PersistorContext.Provider value={{ cart: data.cart, addToCart, removeFromCart }}>
      {children}
    </PersistorContext.Provider>
  );
};
