/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white px-4 py-8 mt-8">
      <div className="relative min-h-[538px] rounded-md overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://transvelo.github.io/freshcart/assets/images/slide-1.jpeg"
          alt=""
          layout="fill"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          quality={100}
        />
        {/* Content */}
        <div className="absolute top-0 left-0 right-0 md:left-[64px] md:right-[64px] bottom-0 flex items-center justify-start md:w-[30%] w-full">
          <div className="max-w-6xl mx-auto px-4">
            {/* Discount Tag */}
            <div
              className="bg-yellow-400 rounded-md py-1 px-2 text-xs font-bold text-left text-black mb-4 break-words"
              style={{ fontSize: '10.5px', lineHeight: '1', width: 'max-content' }}
            >
              <p className="font-[Inter, sans-serif] text-[10.5px] font-bold leading-[10.5px] break-words">
                Opening Sale Discount 50%
              </p>
            </div>

            {/* Text and Button */}
            <div className="text-left text-black">
              <h2 className="text-[44.36px] font-[Inter, sans-serif] font-bold text-blackbrand leading-[53.232px] mb-[16px] break-words">
                SuperMarket For Fresh Grocery
              </h2>
              <p className="text-lg mb-4 text-graybrand font-[Inter, sans-serif] text-[16.5564px] font-medium leading-[24.8345px] break-words">
                Introduced a new model for online grocery shopping and convenient home delivery.
              </p>
              <div className="mt-4">
                <Link
                  href="/shop"
                  className="bg-blackbrand text-white rounded-md py-[9.92px] px-[19px] inline-block font-[Inter, sans-serif] text-[14px] font-regular leading-[21px] text-center transition-all duration-300 ease-in-out break-words"
                >
                  Shop Now {'->'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
