import React from 'react';

const ConfirmationPage = ({ order }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Thank you for your order!</h1>
      <p className="text-lg mb-4">Your order details:</p>
      {/* <ul className="list-disc ml-6">
        <li className="mb-2">Name: {order.name}</li>
        <li className="mb-2">Email: {order.email}</li>
        <li className="mb-2">Phone: {order.phone}</li>
        <li className="mb-2">Address: {order.address}</li>
        <li className="mb-2">Pizza Size: {order.size}</li>
        <li className="mb-2">Toppings: {order.toppings.join(', ')}</li>
        <li className="mb-2">Special Instructions: {order.instructions}</li>
      </ul> */}
      <p className="text-lg mt-8">We'll start preparing your pizza right away. It should be ready for pickup or delivery within 30-45 minutes.</p>
    </div>
  );
}

export default ConfirmationPage;
