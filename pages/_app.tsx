import { getDefaultLayout } from '@/components/common/Layout';
import { AppPropsWithLayout } from '@/types/pages/_app';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getDefaultLayout;

  return getLayout(<Component {...pageProps} />, pageProps);
}

export default App;
