import React from 'react';
import Star from '../icons/StarIcon';

interface StarRatingProps {
  currentRating: number;
  totalRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ currentRating, totalRating = 5 }) => {
  // Create an array of stars to render
  const stars = Array.from({ length: totalRating }, (_, index) => {
    return <Star key={index} filled={index < currentRating} />;
  });

  return <div className="flex gap-[6px]">{stars}</div>;
};

export default StarRating;
