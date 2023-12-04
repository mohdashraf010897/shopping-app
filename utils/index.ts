import { usePersistorProvider } from './hooks/useSessionProvider';

export const calculateTotalItemsInCart = () => {
  const { cart } = usePersistorProvider();
  return Object.values(cart).reduce((acc, { itemsInCart }) => acc + itemsInCart, 0);
};
