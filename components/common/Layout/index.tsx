import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { Inter } from 'next/font/google';
import { LayoutProps } from '@/types/components/layout';
import CartView from '../CartView';
import Transition from '../Transition';

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
  categories,
}) => {
  return (
    <>
      <Transition>
        {showHeader && <Header />}
        <main className={`${inter.className} page`}>{children}</main>
        {showFooter && <Footer categories={categories ?? []} />}
      </Transition>
      <CartView />
    </>
  );
};

export const getDefaultLayout = (page: React.ReactNode, pageProps?: Record<string, unknown>) => (
  <Layout {...(pageProps ?? {})}>{page}</Layout>
);

export const getLayoutWithNoHeader = (
  page: React.ReactNode,
  pageProps?: Record<string, unknown>,
) => (
  <Layout {...(pageProps ?? {})} showHeader={false}>
    {page}
  </Layout>
);

export const getLayoutWithNoFooter = (
  page: React.ReactNode,
  pageProps?: Record<string, unknown>,
) => (
  <Layout {...(pageProps ?? {})} showFooter={false}>
    {page}
  </Layout>
);

export default Layout;
