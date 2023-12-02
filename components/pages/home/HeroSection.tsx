import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-8 mt-8">
      <div className="relative min-h-[538px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="https://transvelo.github.io/freshcart/assets/images/slide-1.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className="wp-block-cover__image-background"
        />

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start">
          {/* Discount Tag */}
          <div className="bg-yellow-400 rounded-md py-1 px-2 text-xs font-bold text-left text-black mb-4" style={{ fontSize: '10.5px', lineHeight: '1' }}>
            <p>Opening Sale Discount 50%</p>
          </div>

          {/* Text and Button */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              SuperMarket For Fresh Grocery
            </h2>
            <p className="text-gray-600 text-sm">
              Introduced a new model for online grocery shopping and convenient home delivery.
            </p>
            <div className="mt-4">
              <Link className='className="bg-gray-800 text-white rounded-md py-2 px-5"' href="/shop">
                Shop Now {'->'}               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
