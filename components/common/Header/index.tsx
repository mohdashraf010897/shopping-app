import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import UserActions from '../UserActions';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center p-4 gap-[20px]">
        <Logo />
        <SearchBar />
        <UserActions />
      </div>
      <div>{/* <MenuBar items={menuData} /> */}</div>
    </header>
  );
};

export default Header;
