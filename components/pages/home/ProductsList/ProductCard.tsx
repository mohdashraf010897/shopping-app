/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import StarRating from '@/components/common/StarRating';
import AddIcon from '@/components/common/icons/AddIcon';

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  discountedPrice?: number;
  sale: boolean;
  rating: number;
  imageURL: string;
};

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  discountedPrice,
  sale,
  rating,
  imageURL,
}) => {
  return (
    <li
      className="relative block hover:shadow-md p-4 border border-gray-200 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:border-green-500"
      role="listitem"
      aria-label={name}
    >
      {sale && (
        <div className="w-[max-content] text-sm text-#43454b font-semibold absolute right-2 top-2 bg-white px-2 py-1 rounded border border-[#43454B] z-10 cursor-pointer m-0 p-[3.0625px]">
          <span className="text-#43454b cursor-pointer inline font-inter text-[12.25px] font-semibold leading-[18.375px] list-none text-center uppercase">
            Sale
          </span>
        </div>
      )}
      <div className="flex flex-col">
        <Link
          aria-label={`Link to ${name}`}
          className="block transition-all duration-300 ease-in-out"
          href={`/products/${id}`}
        >
          <div className="mb-3">
            <Image
              src={imageURL}
              alt={name}
              width={291}
              height={291}
              style={{
                height: 291,
                width: '100%',
              }}
              className="object-cover rounded-md block transition-all duration-300 ease-in-out"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 transition-all duration-300 ease-in-out">
            {name}
          </h2>
        </Link>
        <div className="text-lg my-2 transition-all duration-300 ease-in-out">
          {discountedPrice ? (
            <>
              {' '}
              <ins className="text-[#5C6C75] inline font-inter text-sm font-medium leading-[21px] list-none text-left no-underline mr-2 transition-all duration-300 ease-in-out">
                ${discountedPrice}
              </ins>
              <del className="text-[#5C6C75] inline font-inter text-sm font-medium leading-[21px] list-none text-left mr-2 transition-all duration-300 ease-in-out">
                ${price}
              </del>
            </>
          ) : (
            <span className="text-[#5C6C75] inline font-inter text-sm font-medium leading-[21px] list-none text-left no-underline transition-all duration-300 ease-in-out">
              ${price}
            </span>
          )}
        </div>
        <div className="flex mb-3 transition-all duration-300 ease-in-out">
          {/* Display rating as filled and empty stars */}
          <StarRating currentRating={rating} />
        </div>
        <div className="flex justify-between items-center transition-all duration-300 ease-in-out">
          <button
            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 pl-2 rounded text-sm flex items-center gap-[6px] transition-all duration-300 ease-in-out"
            onClick={() => {}}
          >
            <AddIcon color="#fff" />
            Add to cart
          </button>
          <Link
            aria-label={`Add ${name} to wishlist`}
            className="text-gray-600 hover:text-red-500 transition-all duration-300 ease-in-out"
            href={`/add-to-wishlist/${id}`}
          >
            <i className="fa fa-heart-o"></i>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
