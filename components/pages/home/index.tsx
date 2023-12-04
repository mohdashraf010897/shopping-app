import React from 'react';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';
import ProductsList from './ProductsList';

const HomePageComponent: React.FC = () => {
  return (
    <div className="pb-16">
      <HeroSection />
      <FeaturedCategories />
      <ProductsList />
    </div>
  );
};

export default HomePageComponent;
