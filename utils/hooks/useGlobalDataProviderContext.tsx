import { GlobalDataProviderContext } from '@/components/contextProviders/GlobalDataProvider';
import React from 'react';

export function useGlobalDataProvider() {
  const context = React.useContext(GlobalDataProviderContext);

  if (!context) {
    throw new Error('Your component must be used within a DataProviderContext');
  }

  return context;
}
