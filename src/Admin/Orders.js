import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ReactPaginate from "react-paginate";
// import Modal from "react-modal";

const data_per_page=5;

const Orders = ({ curruser }) => {
  const [orders, setOrders] = useState([]);
  const [currpage, setCurrpage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const Fetchorders = async () => {
      try {
        const {data} = await axios.get("/api/orders");
       setOrders(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    Fetchorders();
  }, []);

  const handlePageChange=({selected:select})=>{
    console.log("selected page is ",select)
  }
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const removeOrder = async (order) => {
    console.log("This order wants to be removed: ", order._id);

    try {
      const response = await axios.delete(`/api/orders/${order._id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  console.log(orders);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />

      <div className=" m-5 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">All Orders</h1>
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
          <div
            key={order._id}
            className="grid grid-cols-6 gap-5 shadow-md py-5"
          >
            <div className="col-span-1 mx-4 ">{index + 1}</div>
            <div className="col-span-1 ">#{order._id}</div>
            <div className="col-span-1">
              {moment(order.createdAt).format("Do MMM YYYY, h:mm a")}
            </div>
            <div className="col-span-1">{order.totalPrice}</div>
            <div className="col-span-1">{order.status}</div>
            <div className="col-span-1 " onClick={() => removeOrder(order)}>
              <button onClick={toggleModal}>
                {" "}
                <ClearOutlinedIcon
                  style={{ color: "orangered", font: "1rem" }}
                />
              </button>
            </div>
          </div>
        ))}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={data_per_page}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          nextLinkClassName={"pagination__link"}
          previousLinkClassName={"pagination__link"}
          activeClassName={"pagination__link--active"}
          disabledClassName={"pagination__link--disabled"}
        />
      </div>
    </div>
  );
};

export default Orders;
