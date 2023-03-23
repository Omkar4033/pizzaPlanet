import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Modal from "react-modal";
const Orders = ({ curruser }) => {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    axios
      .get("/api/orders")
      .then((res) => {
        const temp = res.data;
        setOrders(temp); 
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const removeOrder = async (order) => {
    console.log("This order wants to be removed: ", order._id);

    //
    // .then(res => {
    //   const temp=res.data;
    //   console.log(temp);
    // })
    // .catch(err => console.log(err));

    try {
      const response = await axios.delete(`/api/orders/${order._id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(orders);

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-1 font-semibold text-gray-700">Index</div>
        <div className="col-span-1 font-semibold text-gray-700">Order ID</div>
        <div className="col-span-1 font-semibold text-gray-700">Date</div>
        <div className="col-span-1 font-semibold text-gray-700">Total</div>
        <div className="col-span-1 font-semibold text-gray-700">Status</div>
        <div className="col-span-1 font-semibold text-gray-700">
          Cancel Order
        </div>
      </div>
      {orders.map((order, index) => (
        <div key={order._id} className="grid grid-cols-6 gap-5 shadow-md py-5">
          <div className="col-span-1">{index + 1}</div>
          <div className="col-span-1 ">#{order._id}</div>
          <div className="col-span-1">
            {moment(order.createdAt).format("Do MMM YYYY, h:mm a")}
          </div>
          <div className="col-span-1">{order.totalPrice}</div>
          <div className="col-span-1">{order.status}</div>
          <div className="col-span-1 " onClick={() => removeOrder(order)}>
            <button onClick={toggleModal}>
              {" "}
              <ClearOutlinedIcon style={{ color: "orangered", font: "1rem" }} />
            </button>
          </div>
        </div>
      ))}
      <Modal isOpen={isOpen} className="h-50 w-50 h-[40vh] text-center " onRequestClose={toggleModal}>
        <h1>Popup Title</h1>
        <p>Popup content goes here...</p>
        <button className="bg-orange-600" onClick={toggleModal}>Close Popup</button>
      </Modal>
    </div>
  );
};

export default Orders;
