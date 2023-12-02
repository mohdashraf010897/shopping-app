import { NextPage } from 'next';
import { getDefaultLayout } from '@/components/common/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getDefaultLayout;

  return getLayout(<Component {...pageProps} />, pageProps);
}

export default App;
