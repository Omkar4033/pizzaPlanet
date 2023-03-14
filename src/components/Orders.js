import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(orders)

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 font-semibold text-gray-700">Order ID</div>
        <div className="col-span-1 font-semibold text-gray-700">Date</div>
        <div className="col-span-1 font-semibold text-gray-700">Total</div>
        <div className="col-span-1 font-semibold text-gray-700">Status</div>
      </div>
      {orders.map(order => (
        <div key={order._id} className="grid grid-cols-4 gap-4 py-4">
          <div className="col-span-1">{order._id}</div>
          <div className="col-span-1">{moment(order.createdAt).format('MMM Do YYYY, h:mm a')}</div>
          <div className="col-span-1">{order.total}</div>
          <div className="col-span-1">{order.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
