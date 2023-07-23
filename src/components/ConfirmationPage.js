import React, { useState, useEffect } from "react";
import axios from "axios";

const ConfirmationPage = ({ curruser }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/orders?email=${curruser.email}`)
      .then((res) => {
        const temp = res.data;
        setOrders(temp);
      })
      .catch((err) => console.log(err));
  }, [curruser]);

  console.log(orders);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Thank you for your order!</h1>
      <p className="text-lg mb-4">Your order details:</p>
      {orders.map((order, index) => (
        <div key={index}>


          <ul className="list-disc ml-6">
            <li className="mb-2">Pizza Size: {order?.size}</li>
            <li className="mb-2">Toppings: {order?.toppings
            }</li>
            <li className="mb-2">Special Instructions: {order?.instructions}</li>
          </ul>
        </div>
      ))}
      <p className="text-lg mt-8">
        We'll start preparing your pizza right away. It should be ready for
        pickup or delivery within 30-45 minutes.
      </p>
    </div>
  );
};

export default ConfirmationPage;
