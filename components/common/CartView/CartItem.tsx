/* eslint-disable max-len */
import { Product } from '@/types/dataSource';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeleteIcon from '../icons/DeleteIcon';

type CartItemProps = {
  product: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onQuantityChange, onRemove }) => {
  const discountedPrice: number =
    product.sale && product.discountedPrice ? product.discountedPrice : product.price;
  const totalSaved = product.sale ? (product.price - discountedPrice) * quantity : 0;
  const totalPrice = discountedPrice * quantity;

  return (
    <tr className="flex gap-4 pt-8 pb-4 border-b border-[#dfe2e1]">
      <td className="col-span-1">
        <Link href={`/product/${product.slug}`}>
          <Image height={62} width={62} src={product.imageURL} alt={product.name} />
        </Link>
      </td>
      <td className="col-span-1">
        <div className="flex flex-col">
          <h3 className="text-blackbrand cursor-pointer font-inter text-[14px] font-semibold leading-[16.8px] mb-2 max-w-[160px] transition-all duration-300 ease-in-out break-words overflow-auto">
            {product.name}
          </h3>
          <div className="text-sm text-gray-500 flex flex-col">
            <span
              className={`${product.sale ? 'text-gray-500 line-through' : 'text-green-500 '} mr-2`}
            >
              ${product.price}
            </span>
            {product.sale && <span className="text-green-500">${discountedPrice}</span>}
          </div>
          {product.sale && (
            <div className="bg-green-100 rounded text-green-700 inline-block font-inter text-xs font-semibold leading-3 px-1 uppercase whitespace-nowrap w-max p-1.5">
              Save <span className="font-bold">${totalSaved}</span>
            </div>
          )}
          <div className="my-2 text-sm text-gray-500">
            <ul>
              <li className="inline-block text-graybrand font-inter text-[12px] font-semibold leading-[18px] list-none text-left">
                <span>Vendor:</span>
                <span>Global Vendor</span>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={() => onRemove()} className="flex text-gray-500 text-xs">
              <DeleteIcon size={16} /> Remove item
            </button>
          </div>
        </div>
      </td>
      <td className="col-span-1 flex-1 text-right self-center">
        <div className="flex items-stretch">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="px-2 py-1 border border-graylight rounded-l bg-transparent text-graybrand hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={e => {
              const val = Number(e.target.value);
              if (!isNaN(val) && Number.isInteger(val)) {
                onQuantityChange(Math.max(val, 1));
              }
            }}
            className="w-12 text-center border-t border-b border-graylight rounded-none outline-none z-0 text-graybrand"
          />
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="px-2 py-1 border border-graylight rounded-r bg-transparent text-graybrand transition duration-300 hover:bg-gray-200 ease-in-out"
          >
            +
          </button>
        </div>
      </td>
      <td className="col-span-1">
        <div className="flex flex-col justify-center h-[100%]">
          <span className="inline-block text-blackbrand font-inter text-[14px] font-semibold leading-[21px] whitespace-pre-wrap break-all text-right w-[70px]">
            ${totalPrice}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
