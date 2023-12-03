import { PersistorContext } from '@/components/contextProviders/PersistorProvider';
import { useContext } from 'react';

export const usePersistorProvider = () => {
  const context = useContext(PersistorContext);
  if (context === undefined) {
    throw new Error('usePersistorProvider must be used within a PersistorProvider');
  }
  return context;
};
