// Importing required modules and types
import React, { createContext, useState, useEffect, useRef } from 'react';
import {
  PersistorContextType,
  PersistorProviderDataType,
  PersistorProviderProps,
} from '@/types/components/sessionProvider';

// Creating context for Persistor
export const PersistorContext = createContext<PersistorContextType | undefined>(undefined);

// PersistorProvider component
export const PersistorProvider: React.FC<PersistorProviderProps> = ({ children }) => {
  // State for store
  const [store, setStore] = useState<PersistorProviderDataType>({
    cart: {},
    cartDrawer: {
      isOpen: false,
    },
    products: [],
    categories: [],
    reviews: [],
  });
  // Ref for initial render
  const initialRender = useRef(true);

  // Effect to set store from session data
  useEffect(() => {
    setStore(prevData => {
      const sessionData = localStorage.getItem('data');
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        return { ...prevData, ...parsedData };
      }
      return prevData;
    });
  }, []);

  // Effect to set session data from store
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      localStorage.setItem('data', JSON.stringify(store));
    }
  }, [store]);

  // Function to add to cart
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

  // Function to remove from cart
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

  // Function to toggle cart drawer
  const toggleCartDrawer = () => {
    setStore((prevData: PersistorProviderDataType) => ({
      ...prevData,
      cartDrawer: {
        isOpen: !prevData.cartDrawer.isOpen,
      },
    }));
  };

  // Function to add data to store
  const addDataToStore = (data: Partial<PersistorProviderDataType>) => {
    setStore(prevData => ({
      ...prevData,
      ...data,
    }));
  };

  // Return PersistorContext Provider
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
