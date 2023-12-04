import { getDefaultLayout } from '@/components/common/Layout';
import { AppPropsWithLayout } from '@/types/pages/_app';
import '@/styles/globals.css';
import { PersistorProvider } from '@/components/contextProviders/PersistorProvider';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getDefaultLayout;

  return (
    <PersistorProvider>{getLayout(<Component {...pageProps} />, pageProps)}</PersistorProvider>
  );
}

export default App;
