import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Pagination from "../components/Pagination";
import EditIcon from '@mui/icons-material/Edit';

const data_per_page = 8;

const Orders = ({ curruser }) => {
  const [orders, setOrders] = useState([]);
  const [currpage, setCurrpage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const starting_index = currpage * data_per_page - data_per_page;
  const ending_index = currpage * data_per_page;
  const Total_pages = Math.ceil(orders.length / data_per_page);
  useEffect(() => {
    const Fetchorders = async () => {
      try {
        const { data } = await axios.get("/api/orders");
        setOrders(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    Fetchorders();
  }, [orders]);

  const setInputs =async (e, order) => {
    try {

      const id= order._id;
      order.status=e.target.value;
      console.log(order);
      const {data}=await axios.patch(`/api/orders/${id}`,order);
       console.log("changed data is ",data);
      
    } catch (error) {
      
    }
  };

  const ChangeDetails=(order)=>{
    console.log(order);
  }


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

  const changepage = (newpage) => {
    setCurrpage(newpage);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />

      <div className=" m-5 max-w-7xl">
        <h1 className="text-3xl font-bold mb-4">All Orders</h1>
        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Index
          </div>
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Date
          </div>
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Order ID
          </div>
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Total
          </div>
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Status
          </div>
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Cancel Order
          </div>
        </div>
        <div className="">
          {orders.slice(starting_index, ending_index).map((order, index) => (
            <div
              key={order._id}
              className="grid grid-cols-6 gap-8 shadow-md py-5"
            >
              <div className="col-span-1 text-center  ">
                {starting_index + index + 1}
              </div>
              <div className="col-span-1 text-start">
                {moment(order.createdAt).format("Do MMM YYYY, h:mm a")}
              </div>
              <div className="col-span-1 text-center ">#{order._id}</div>
              <div className="col-span-1 text-center text-green-600 ">
                ₹{order.totalPrice}
              </div>
              <div className="col-span-1 text-center">
                <select
                  className="shadow hover:border-yellow-400 appearance-none border rounded  w-[1/2] mx-1  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="one"
                  name="size"
                  value={order.status}
                  onChange={(e) => setInputs(e, order)}
                >
                  <option value="new">new</option>
                  <option value="preparing">preparing</option>
                  <option value="ready">ready</option>
                  <option value="delivered">delivered</option>
                </select>
              </div>
              <div
                className="col-span-1  text-center "
              >
                <button onClick={()=>ChangeDetails(order)}>
                <EditIcon
                  className="to-yellow-500 mx-6"
                />
                </button>
                <button onClick={() => removeOrder(order)}>
                  {" "}
                  <ClearOutlinedIcon
                    className="to-yellow-500"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currpage={currpage}
          Total_pages={Total_pages}
          changepage={changepage}
        />
      </div>
    </div>
  );
};

export default Orders;
