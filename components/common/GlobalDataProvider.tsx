import { GlobalDataProviderProps, ContextDataType } from '@/types/components/dataProvider';
import { createContext, useEffect, useState } from 'react';

export const GlobalDataProviderContext = createContext<ContextDataType | null>(null);

export const GlobalDataProvider = ({ children, initialData = null }: GlobalDataProviderProps) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <GlobalDataProviderContext.Provider value={{ ...(data ?? {}), setData }}>
      {children}
    </GlobalDataProviderContext.Provider>
  );
};
