import { PageDataProviderProps, ContextDataType } from '@/types/components/dataProvider';
import { usePersistorProvider } from '@/utils/hooks/useSessionProvider';
import { createContext, useEffect, useState } from 'react';

export const PageDataProviderContext = createContext<ContextDataType | null>(null);

export const PageDataProvider = ({ children, initialData = null }: PageDataProviderProps) => {
  const { addDataToStore } = usePersistorProvider();
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(prevInitialData => ({ ...(prevInitialData ?? {}), ...(initialData ?? {}) }));
  }, [initialData]);

  useEffect(() => {
    if (data && JSON.stringify(data) !== JSON.stringify(initialData)) {
      addDataToStore({
        products: data.products,
        categories: data.categories,
        reviews: data.reviews,
      });
    }
  }, [data]);

  return (
    <PageDataProviderContext.Provider value={{ ...(data ?? {}), setData }}>
      {children}
    </PageDataProviderContext.Provider>
  );
};
