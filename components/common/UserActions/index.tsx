import React from 'react';
import Link from 'next/link';
import CartIconGrey from '../icons/CartIconGrey';
import HeartIconGrey from '../icons/HeartIconGrey';
import PersonIcon from '../icons/PersonIcon';

const UserActions: React.FC = () => {
  return (
    <div className="flex justify-end items-center space-x-4">
      {/* Wishlist Link */}
      <Link href="#" className="block">
        <HeartIconGrey />
      </Link>

      {/* Account Link */}
      <Link
        href="https://freshcart.madrasthemes.com/gutenberg/my-account/myaccount/"
        className="block"
      >
        <PersonIcon />
      </Link>

      {/* Mini Cart */}
      <button className="relative flex items-center">
        <CartIconGrey />
        {/* eslint-disable-next-line max-len */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">
          0
        </span>
      </button>
    </div>
  );
};

export default UserActions;
