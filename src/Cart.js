import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentForm from "./components/PaymentForm";

const Cart = ({ curruser }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showpayment,setShowpayment]=useState(false);
  useEffect(() => {
    const fetchCartItems = async () => {
      const { data } = await axios.get("/api/pizzas");
      console.log(data);
      setCartItems(data);
    };
    fetchCartItems();
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container flex my-5">
      <div className="first  w-1/2 flex ">

      {<div className="flex-col m-auto" >
        <h1 className="text-2xl  font-bold mb-4">Your Cart</h1>
        <div className="container  ">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center">
              <img
                className="h-20 w-20 object-cover mr-4"
                src={process.env.PUBLIC_URL + "Images/logo.jpg"}
                alt={item.name}
              />
              <div>
                <h2 className="text-lg">{item.toppings}</h2>
                <p className="text-gray-500 text-sm">Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-start mt-4">
            <span className="font-bold">Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
            <button
            onClick={()=>setShowpayment(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Pay ₹{subtotal}
            </button>
        </div>
      </div>}
      </div>
      <div className="second   w-1/2 flex m-auto ">

      {showpayment && <PaymentForm setShowpayment={setShowpayment} cartItems={cartItems} subtotal={subtotal.toFixed(2)} />}
      </div>
    </div>
  );
};

export default Cart;
