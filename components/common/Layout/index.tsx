import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${inter.className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
