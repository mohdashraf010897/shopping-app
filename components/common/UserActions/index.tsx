import React, { useMemo } from 'react';
import Link from 'next/link';
import CartIconGrey from '../icons/CartIconGrey';
import HeartIconGrey from '../icons/HeartIconGrey';
import PersonIcon from '../icons/PersonIcon';
import { usePersistorProvider } from '@/utils/hooks/useSessionProvider';

const UserActions: React.FC = () => {
  const { cart } = usePersistorProvider();
  const totalCartItems = useMemo(() => {
    return Object.values(cart).reduce((acc, { itemsInCart }) => acc + itemsInCart, 0);
  }, [cart]);

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
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 py-0.5 inline-block min-w-[20px] h-[20px]">
          {totalCartItems}
        </span>
      </button>
    </div>
  );
};

export default UserActions;
