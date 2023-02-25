import React, { useState, useEffect } from 'react';
// import CartItem from './CartItem';
import axios from 'axios'
import Checkout from './components/Checkout';

const Cart = ({curruser}) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const fetchCartItems = async () => {
      const {data} = await axios.get('/api/pizzas');
      console.log(data);
       setCartItems(data);
    };
    fetchCartItems();
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="container m-auto">

       {cartItems.map((item) => (
        <div className="flex items-center">
        <img className="h-20 w-20 object-cover mr-4" src={process.env.PUBLIC_URL+"Images/logo.jpg"} alt={item.name} />
        <div>
          <h2 className="text-lg">{item.toppings}</h2>
          <p className="text-gray-500 text-sm">Price: ₹{item.price}</p>
        </div>
      </div>
      ))} 
      <div className="flex justify-start mt-4">
        <span className="font-bold">Subtotal:</span>
        <span  >₹{subtotal.toFixed(2)}</span>
      </div>
        <Checkout cartItems={cartItems} subtotal={subtotal.toFixed(2)}/>
     
      </div>
    </div>
  );
};

export default Cart;