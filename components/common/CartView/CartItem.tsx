import { Product } from '@/types/dataSource';
import React from 'react';

type CartItemProps = {
  product: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onQuantityChange, onRemove }) => {
  const discountedPrice: number =
    product.sale && product.discountedPrice ? product.discountedPrice : product.price;
  const totalDiscountedPrice = discountedPrice * quantity;
  const totalSaved = product.sale ? (product.price - discountedPrice) * quantity : 0;

  return (
    <tr className="grid grid-cols-3 gap-4">
      <td className="col-span-1">
        <a href="#">
          <img src={product.imageURL} alt={product.name} />
        </a>
      </td>
      <td className="col-span-1">
        <div className="flex flex-col">
          <a className="font-bold" href="#">
            {product.name}
          </a>
          <div className="text-sm text-gray-500">
            <span className="line-through text-red-500">${product.price}</span>
            {product.sale && <span className="text-green-500">${discountedPrice}</span>}
          </div>
          {product.sale && (
            <div className="text-sm text-green-500">
              Save <span className="font-bold">${totalSaved}</span>
            </div>
          )}
          <div className="text-sm text-gray-500">
            <ul>
              <li>
                <span>Vendor:</span>
                <span>Global Vendor</span>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <input
              type="number"
              value={quantity}
              onChange={e => onQuantityChange(parseInt(e.target.value))}
              className="border rounded w-20 text-center"
            />
            <button onClick={() => onRemove()} className="text-red-500">
              Remove item
            </button>
          </div>
        </div>
      </td>
      <td className="col-span-1">
        <div className="flex flex-col">
          <span className="font-bold">${totalDiscountedPrice}</span>
          {product.sale && (
            <div className="text-sm text-green-500">
              Save <span className="font-bold">${totalSaved}</span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
