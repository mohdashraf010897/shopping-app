/* eslint-disable max-len */
import React from 'react';
import { usePageDataProvider } from '@/utils/hooks/usePageDataProviderContext';
import ProductCard from './ProductCard';

const ProductsList: React.FC = () => {
  const { products } = usePageDataProvider();

  if (!products) {
    return null;
  }

  return (
    <section className="bg-white flex flex-col gap-6 m-6 mt-16">
      <div>
        <h2 className="text-[#001E2B] font-inter text-[24.496px] font-semibold leading-[29.3952px] tracking-[-0.48px]">
          Popular Products
        </h2>
      </div>
      <div
        className="grid gap-4 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(297px, 1fr))' }}
      >
        {products?.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </section>
  );
};

export default ProductsList;
