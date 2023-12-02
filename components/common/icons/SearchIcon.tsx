/* eslint-disable max-len */
import React from 'react';

const SearchIcon: React.FC = () => {
  return (
    <svg
      className="search-icon cursor-pointer text-green-500 min-w-6 min-h-6 align-text-bottom overflow-hidden"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="#0AAD0A"
    >
      <path d="M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path>
    </svg>
  );
};

export default SearchIcon;
