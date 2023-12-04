/* eslint-disable max-len */
import React from 'react';
import SideDrawer from '../SideDrawer';
import { usePersistorProvider } from '@/utils/hooks/useSessionProvider';
import { calculateTotalItemsInCart } from '@/utils';
import CartItem from './CartItem';

const CartView: React.FC = () => {
  const {
    isCartDrawerOpen,
    toggleCartDrawer,
    products = [],
    cart,
    addToCart,
    removeFromCart,
  } = usePersistorProvider();
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const currentQuantity = cart[productId]?.itemsInCart || 0;
    if (newQuantity > currentQuantity) {
      // If the new quantity is greater, add the difference to the cart
      addToCart(productId, newQuantity - currentQuantity);
    } else if (newQuantity < currentQuantity) {
      // If the new quantity is less, remove the difference from the cart
      removeFromCart(productId, currentQuantity - newQuantity);
    }
  };

  const handleRemove = (productId: string) => {
    // Remove the product from the cart by setting its quantity to 0
    const currentQuantity = cart[productId]?.itemsInCart || 0;
    removeFromCart(productId, currentQuantity);
  };
  return (
    <SideDrawer isOpen={isCartDrawerOpen} onClose={toggleCartDrawer} direction="right">
      <div className="block p-4 bg-white rounded-lg shadow-md">
        <h2 className="flex justify-start gap-1 items-center mb-4 text-[#5C6C75] font-inter text-[20px] font-semibold leading-8 tracking-tighter ml-2">
          <span>Your cart</span>
          <span>({calculateTotalItemsInCart()} items)</span>
        </h2>

        <div className="overflow-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left">
                <th className="p-2">Product</th>
                <th className="p-2">Details</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <CartItem
                  product={product}
                  key={product.id}
                  quantity={cart[product.id].itemsInCart}
                  onQuantityChange={newQuantity => handleQuantityChange(product.id, newQuantity)}
                  onRemove={() => handleRemove(product.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span>Subtotal</span>
            <span>$1908</span>
          </div>
          <p className="text-sm text-gray-500">
            Shipping, taxes, and discounts calculated at checkout.
          </p>
          <div className="flex space-x-2 mt-4">
            {/* Buttons for 'View my cart' and 'Go to checkout' */}
          </div>
        </div>
      </div>
    </SideDrawer>
  );
};

export default CartView;
