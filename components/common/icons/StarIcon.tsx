/* eslint-disable max-len */
import React from 'react';

interface StarProps {
  filled?: boolean;
}

const Star: React.FC<StarProps> = ({ filled = false }) => {
  const fillColor = filled ? '#ffd700' : 'none'; // Golden color for filled, none for empty
  const strokeColor = '#ffd700'; // Golden border for both filled and empty

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2, 15.09 8.26, 22 9.27, 17 14.14, 18.18 21.02, 12 17.77, 5.82 21.02, 7 14.14, 2 9.27, 8.91 8.26" />
    </svg>
  );
};

export default Star;
