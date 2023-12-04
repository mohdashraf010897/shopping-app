/* eslint-disable max-len */
import React, { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center animate-pulse flex-grow mr-12 ml-6"
    >
      <input
        style={{ boxShadow: '0 0 2px 0px #0AAD0A', outline: 'none' }}
        type="search"
        id="wp-block-search__input-2"
        name="s"
        placeholder="Search"
        required
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-lg shadow-sm p-3 flex-grow transition ease-in-out duration-300 hover:bg-gray-200 focus:bg-white active:bg-gray-300 text-black pr-[52px]"
      />
      <div className="overflow-hidden rounded-r-lg absolute right-0 top-0 bottom-0 border-l border-gray-300 flex items-center justify-center">
        <button
          type="submit"
          aria-label="Search"
          className="transition duration-300 ease-in-out bg-transparent text-secondary hover:bg-green-200 p-3 focus:bg-green-300 active:bg-green-400"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
