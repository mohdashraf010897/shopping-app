/* eslint-disable max-len */
import React from 'react';
import { usePageDataProvider } from '@/utils/hooks/usePageDataProviderContext';
import FeaturedCard from './FeaturedCard';

const FeaturedCategories: React.FC = () => {
  const { categories } = usePageDataProvider();

  if (!categories) {
    return null;
  }

  return (
    <section className="bg-white flex flex-col gap-6 m-6">
      <div>
        <h2 className="text-blackbrand font-inter text-[24.496px] font-semibold leading-[29.3952px] tracking-[-0.48px]">
          Featured Categories
        </h2>
      </div>
      <div className="flex overflow-x-scroll space-x-3">
        {categories
          ?.filter(_ => !!_.imageURL)
          .map(({ title, id, imageURL = '' }) => (
            <FeaturedCard imageUrl={imageURL} title={title} key={id} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
