import React from 'react';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';

const HomePageComponent: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
    </>
  );
};

export default HomePageComponent;
