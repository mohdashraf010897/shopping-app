/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // import Image from next/image

interface FeaturedCardProps {
  imageUrl: string;
  title: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ imageUrl, title }) => {
  return (
    <figure className="flex flex-col items-center justify-center min-w-[202px] border border-gray-300 rounded-lg p-4 transition-all duration-300 ease-in-out relative bg-white w-[202px] h-[217px] hover:border-green-500 hover:shadow-md cursor-pointer hover:!text-green-700">
      <Image src={imageUrl} alt={title} width={120} height={120} quality={100} />{' '}
      {/* use Image instead of img */}
      <figcaption className="mt-3 text-sm font-medium leading-6 transition duration-300 ease-in-out text-wp--preset--color--secondary font-wp--preset--font-family--primary-font text-wp--preset--font-size--base font-weight-500 leading-1.5 visually-hidden">
        <Link href="/" className="text-black">
          {title}
        </Link>
      </figcaption>
    </figure>
  );
};

export default FeaturedCard;
