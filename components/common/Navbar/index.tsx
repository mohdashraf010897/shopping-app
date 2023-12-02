import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
            
                  <span className="font-semibold text-gray-500 text-lg">FreshCart</span>
                
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              <Link href="/shop" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Shop</Link>
              <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Login</Link>
            <Link href="/cart" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
              Cart
              {/* Icon can be added here */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
