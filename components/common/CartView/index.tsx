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

  const calculateSubtotal = () => {
    return products.reduce((acc, product) => {
      const quantity = cart[product.id]?.itemsInCart || 0;
      return acc + (product.discountedPrice || product.price) * quantity;
    }, 0);
  };

  return (
    <SideDrawer isOpen={isCartDrawerOpen} onClose={toggleCartDrawer} direction="right">
      <div className="block p-4 bg-white rounded-lg ">
        <h2 className="flex justify-start gap-1 items-center mb-4 text-graybrand font-inter text-[20px] font-semibold leading-8 tracking-tighter ml-2">
          <span>Your cart</span>
          <span>({calculateTotalItemsInCart()} items)</span>
        </h2>

        <div className="h-[62vh] overflow-y-scroll">
          <table className="min-w-full">
            <tbody>
              {products
                .filter(_ => !!cart[_.id])
                .map(product => (
                  <CartItem
                    product={product}
                    key={product.id}
                    quantity={cart[product.id]?.itemsInCart || 0}
                    onQuantityChange={newQuantity => handleQuantityChange(product.id, newQuantity)}
                    onRemove={() => handleRemove(product.id)}
                  />
                ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
          <div className="text-black flex justify-between items-center mb-2">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <p className="text-sm text-gray-500">
            Shipping, taxes, and discounts calculated at checkout.
          </p>
          <div className="flex mt-2">
            <div className="flex justify-between w-[100%] mt-4">
              <button
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 pl-2 rounded text-sm flex items-center gap-[6px] transition-all duration-300 ease-in-out"
                onClick={() => {
                  // Add logic for 'View my cart' button
                }}
              >
                <span>View my cart</span>
              </button>
              <button
                className="text-white bg-black hover:bg-gray-600 px-4 py-2 pl-2 rounded text-sm flex items-center gap-[6px] transition-all duration-300 ease-in-out"
                onClick={() => {
                  // Add logic for 'Go to checkout' button
                }}
              >
                <span>Go to checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
  );
};

export default CartView;
