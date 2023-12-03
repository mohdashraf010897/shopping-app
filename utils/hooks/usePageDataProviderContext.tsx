import { PageDataProviderContext } from '@/components/contextProviders/PageDataProvider';
import React from 'react';

export function usePageDataProvider() {
  const context = React.useContext(PageDataProviderContext);

  if (!context) {
    throw new Error('Your component must be used within a DataProviderContext');
  }

  return context;
}
