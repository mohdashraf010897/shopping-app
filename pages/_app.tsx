import { getDefaultLayout } from '@/components/common/Layout';
import { AppPropsWithLayout } from '@/types/pages/_app';
import '@/styles/globals.css';
import { PersistorProvider } from '@/components/contextProviders/PersistorProvider';
import Transition from '@/components/common/Transition';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getDefaultLayout;

  return (
    <PersistorProvider>
      <Transition>{getLayout(<Component {...pageProps} />, pageProps)}</Transition>
    </PersistorProvider>
  );
}

export default App;
