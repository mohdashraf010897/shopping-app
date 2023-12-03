import React from 'react';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';
import ProductsList from './ProductsList';

const HomePageComponent: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <ProductsList />
    </>
  );
};

export default HomePageComponent;
