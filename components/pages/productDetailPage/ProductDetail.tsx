/* eslint-disable max-len */
import ImagePreview from '@/components/common/ImagePreview';
import StarRating from '@/components/common/StarRating';
import AddIcon from '@/components/common/icons/AddIcon';
import { Product } from '@/types/dataSource';
import { usePersistorProvider } from '@/utils/hooks/useSessionProvider';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductDetail: React.FC<Product & { category: string }> = ({
  id,
  name,
  price,
  discountedPrice,
  imageURL,
  rating,
  category,
  sale,
  // Destructure other product properties as needed
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleCartDrawer } = usePersistorProvider();
  const addToCartHandler = () => {
    // Implement add to cart functionality
    addToCart(id, quantity);
  };

  return (
    <div className="flex flex-col md:flex-row mt-10">
      <div className="md:w-1/2 relative">
        <ImagePreview
          height={600}
          width={600}
          priority
          quality={100}
          imageUrl={imageURL}
          alt={name}
          className="w-full object-cover w-full h-auto"
          zoomLevel={2}
        />
        {sale && (
          <span className="absolute top-1 left-1 z-10 bg-red-700 text-white text-xs font-medium rounded-md px-2 py-1">
            Sale!
          </span>
        )}
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
        <div className="border-b border-[#ecf0ef] pb-6">
          <h1 className="text-[#5C6C75] font-inter text-4xl font-bold mb-4">{name}</h1>
          <p className="mt-2">
            <StarRating currentRating={rating} />
          </p>
          <div className="mt-4">
            {discountedPrice ? (
              <>
                <ins className="text-[#001E2B] inline font-inter text-lg font-bold leading-[31.5px] mr-4">
                  ${discountedPrice}
                </ins>
                <del className="text-[#001E2B] inline font-inter text-lg font-bold leading-[31.5px] line-through">
                  ${price}
                </del>
              </>
            ) : (
              <span className="text-[#001E2B] inline font-inter text-lg font-bold leading-[31.5px]">
                ${price}
              </span>
            )}
          </div>
        </div>
        <div className="border-b border-[#ecf0ef] pb-6">
          <div className="mt-4">
            <label className="mr-2">Quantity:</label>
            <div className="flex items-stretch">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-2 py-1 border border-[#ecf0ef] rounded-l bg-transparent text-[#5C6C75] hover:bg-gray-200 transition duration-300 ease-in-out"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={e => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && Number.isInteger(val)) {
                    setQuantity(Math.max(val, 1));
                  }
                }}
                className="w-12 text-center border-t border-b border-[#ecf0ef] rounded-none outline-none z-0 text-[#5C6C75]"
              />
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-2 py-1 border border-[#ecf0ef] rounded-r bg-transparent text-[#5C6C75] transition duration-300 hover:bg-gray-200 ease-in-out"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="min-w-[190px] rounded-[6px] flex justify-center items-center transition-all duration-300 ease-in-out text-white bg-green-500 hover:bg-green-600 px-4 py-2 pl-2 rounded text-sm flex items-center gap-[6px] transition-all duration-300 ease-in-out"
              onClick={addToCartHandler}
              role={'button'}
            >
              <AddIcon color="#fff" />
              Add to cart
            </button>
            <button
              className="min-w-[190px] rounded-[6px] flex justify-center items-center transition-all duration-300 ease-in-out text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 pl-2 rounded text-sm flex items-center gap-[6px] transition-all duration-300 ease-in-out"
              onClick={toggleCartDrawer}
              role={'button'}
            >
              View Cart
            </button>
          </div>
        </div>
        <div className="mt-6 grid items-center grid-cols-2 grid-rows-auto overflow-hidden text-[#5C6C75] text-sm font-inter font-medium capitalize">
          Category:{' '}
          <span>
            <Link
              href="https://freshcart.madrasthemes.com/gutenberg/product-category/daily-best-sells/"
              rel="tag"
            >
              {category}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
