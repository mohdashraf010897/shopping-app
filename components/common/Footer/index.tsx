/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterProps } from '@/types/components/footer';
import { fetchCategories } from '@/utils/api';
import { Category } from '@/types/dataSource';

const Footer: React.FC<FooterProps> = ({ categories: propCategories }) => {
  const [categories, setCategories] = useState(propCategories);

  useEffect(() => {
    if (!propCategories || propCategories.length === 0) {
      fetchCategories().then(res => setCategories(res as Category[]));
    }
  }, [propCategories]);

  return (
    <footer className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Categories Section */}
        <div className="w-full md:w-1/3 mb-8 lg:mb-0">
          <h6 className="text-lg font-semibold text-gray-800">Categories</h6>
          <ul className="mt-4 space-y-2">
            {categories.map(({ title, id }) => (
              <li key={id}>
                <Link className="text-gray-800 hover:text-green-500" href={`/category/${title}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get to Know Us Section */}
        <div className="w-full md:w-1/3 mb-8 lg:mb-0">
          <h6 className="text-lg font-semibold text-gray-800">Get to Know Us</h6>
          <ul className="mt-4 space-y-2">
            {/* Mock Info Links */}
            <li>
              <Link className="text-gray-800 hover:text-green-500" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 hover:text-green-500" href="/blog">
                Blog
              </Link>
            </li>
            {/* ... more items */}
          </ul>
        </div>

        {/* Become a Shopper Section */}
        <div className="w-full md:w-1/3">
          <h6 className="text-lg font-semibold text-gray-800">Become a Shopper</h6>
          <ul className="mt-4 space-y-2">
            {/* Mock Shopper Links */}
            <li>
              <Link className="text-gray-800 hover:text-green-500" href="/shopper-opportunities">
                Shopper Opportunities
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 hover:text-green-500" href="/earnings">
                Earnings
              </Link>
            </li>
            {/* ... more items */}
          </ul>
        </div>

        {/* Payment Partners and Social Media Links */}
        <div className="w-full border-t border-gray-600 mt-8 pt-4 flex flex-col justify-start items-start gap-5 sm:flex-row sm:justify-between">
          {/* Payment Partners */}
          <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-4">
            <h6 className="text-lg font-semibold text-gray-800 mr-4">Payment Partners</h6>
            <Image
              src="https://transvelo.github.io/freshcart/assets/images/amazonpay.svg"
              alt="Amazon Pay"
              width={44}
              height={28}
            />
            <Image
              src="https://transvelo.github.io/freshcart/assets/images/american-express.svg"
              alt="American Express"
              width={34}
              height={28}
            />
            <Image
              src="https://transvelo.github.io/freshcart/assets/images/mastercard.svg"
              alt="Mastercard"
              width={29}
              height={28}
            />
            <Image
              src="https://transvelo.github.io/freshcart/assets/images/paypal.svg"
              alt="Paypal"
              width={40}
              height={28}
            />
            <Image
              src="https://transvelo.github.io/freshcart/assets/images/visa.svg"
              alt="Visa"
              width={29}
              height={28}
            />
          </div>

          {/* Social Media Links */}
          <div className="flex-1 flex flex-wrap items-center justify-start gap-2 sm:justify-end sm:gap-4">
            <h6 className="text-lg font-semibold text-gray-800 mr-4">Follow us on</h6>
            <Link
              className="rounded-md p-1 hover:bg-green-500 active:bg-green-600"
              href="https://www.facebook.com"
            >
              <Image
                src={'/images/social/facebook.svg'}
                alt="facebook-icon"
                height={20}
                width={20}
              />
            </Link>
            <Link
              className="rounded-md p-1 hover:bg-green-500 active:bg-green-600"
              href="https://www.twitter.com"
            >
              <Image src={'/images/social/twitter.svg'} alt="twitter-icon" height={20} width={20} />
            </Link>
            <Link
              className="rounded-md p-1 hover:bg-green-500 active:bg-green-600"
              href="https://www.instagram.com"
            >
              <Image
                src={'/images/social/instagram.svg'}
                alt="instagram-icon"
                height={20}
                width={20}
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-sm text-center mt-8">
          <p className="text-gray-800">
            Copyright 2023 © FreshCart WordPress Theme. All rights reserved. Powered by{' '}
            <Link className="text-blue-600" href="/">
              Madrasthemes
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
