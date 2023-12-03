import { PageDataProviderProps, ContextDataType } from '@/types/components/dataProvider';
import { createContext, useEffect, useState } from 'react';

export const PageDataProviderContext = createContext<ContextDataType | null>(null);

export const PageDataProvider = ({ children, initialData = null }: PageDataProviderProps) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(prevInitialData => ({ ...(prevInitialData ?? {}), ...(initialData ?? {}) }));
  }, [initialData]);

  return (
    <PageDataProviderContext.Provider value={{ ...(data ?? {}), setData }}>
      {children}
    </PageDataProviderContext.Provider>
  );
};
