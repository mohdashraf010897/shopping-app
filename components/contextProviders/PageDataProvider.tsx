// Importing required types and hooks
import { PageDataProviderProps, ContextDataType } from '@/types/components/dataProvider';
import { usePersistorProvider } from '@/utils/hooks/useSessionProvider';
import { createContext, useEffect, useState } from 'react';

// Creating context for Page Data
export const PageDataProviderContext = createContext<ContextDataType | null>(null);

// Page Data Provider component
export const PageDataProvider = ({ children, initialData = null }: PageDataProviderProps) => {
  // Using persistor provider hook
  const { addDataToStore } = usePersistorProvider();
  // State for data
  const [data, setData] = useState(initialData);

  // Effect to set data
  useEffect(() => {
    setData(prevInitialData => ({ ...(prevInitialData ?? {}), ...(initialData ?? {}) }));
  }, [initialData]);

  // Effect to add data to store
  useEffect(() => {
    if (data) {
      addDataToStore({
        products: data.products,
        categories: data.categories,
        reviews: data.reviews,
      });
    }
  }, [data]);

  // Returning Provider with value and children
  return (
    <PageDataProviderContext.Provider value={{ ...(data ?? {}), setData }}>
      {children}
    </PageDataProviderContext.Provider>
  );
};
