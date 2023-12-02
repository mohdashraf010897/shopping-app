import { DataProviderProps, ContextDataType } from '@/types/components/dataProvider';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext<ContextDataType | null>(null);

export const DataProvider = ({ children, initialData }: DataProviderProps) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
