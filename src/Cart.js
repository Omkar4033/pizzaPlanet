import React, { useState, useEffect } from 'react';
// import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCartItems(data);
    };
    fetchCartItems();
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {/* {cartItems.map((item) => (
        <CartItem key={item._id} item={item} />
      ))} */}
      <div className="flex justify-between mt-4">
        <span className="font-bold">Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 mt-4">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
