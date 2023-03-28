import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Pagination from "../components/Pagination";
const data_per_page = 5;


const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [total,setTotal]=useState(0);
  const [currpage, setCurrpage] = useState(1);
  const [Amount, setAmount] = useState(0);

  const starting_index = currpage * data_per_page - data_per_page;
  const ending_index = currpage * data_per_page;
  const Total_pages = Math.ceil(orders.length / data_per_page);
  useEffect(() => {
    const Fetchorders = async () => {
      try {
        const { data } = await axios.get("/api/orders");
        setOrders(data);
        let price=0;
        setTotal(data.length);
        data.filter(d => price+=d.totalPrice);
    
        setAmount(price);
      } catch (error) {
        console.log(error.message);
      }
    };

    Fetchorders();
  }, []);

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

  const changepage = (newpage) => {
    setCurrpage(newpage);
  };
  console.log(orders);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />

      <div className="container flex-col ">
        <div className="top flex flex-col justify-center  ">
          <span className="  text-lg p-4 font-semibold"> Inventory status :</span>
          <div className="div flex h-[20vh] inset-0 mt-5   lg:justify-evenly sm:justify-evenly">
            <div className="second text-center  h-[12vh] w-[38vh] rounded-lg  bg-green-600 flex p-1   ">
            <div className="logo w-20 flex-col justify-center ">
                <SwapCallsOutlinedIcon style={{fontSize:"2.5em"}}  className="text-7xl  mt-5 text-white " />
              </div>
              <div className="text flex-col mt-2 justify-center">
                <div className=" text-center text-lg text-slate-200">Total Orders</div>
                <div className="text-2xl text-center font-mono font-medium m-1 text-slate-200">{total}</div>
              </div>
            </div>
            <div className="second text-center  h-[12vh] w-[38vh] rounded-lg  bg-green-600 flex p-1   ">
              <div className="logo w-20 flex-col justify-center ">
                <PendingActionsOutlinedIcon style={{fontSize:"2.5em"}}  className="text-7xl  mt-5 text-white " />
              </div>
              <div className="text flex-col mt-2 justify-center">
                <div className=" text-center text-lg text-slate-200">Pending Orders</div>
                <div className="text-2xl text-center font-mono font-medium m-1 text-slate-200">12</div>
              </div>
            </div>
            <div className="third text-center  h-[12vh] w-[38vh] rounded-lg  bg-green-600 flex p-1   ">
              <div className="logo w-20">
              <VerifiedOutlinedIcon style={{fontSize:"2.5em"}}  className="text-7xl  mt-5 text-white " />
              </div>
              <div className="text flex-col  mt-2 justify-center">
                <div className=" text-center text-lg text-slate-200">Completed Orders</div>
                <div className="text-2xl text-center font-mono font-medium m-1 text-slate-200">12</div>
              </div>
            </div>
            <div className="fourth  text-center h-[12vh] w-[38vh] rounded-lg  bg-green-600 flex p-1  ">
              <div className="logo w-20">
              <AccountBalanceWalletOutlinedIcon style={{fontSize:"2.5em"}}  className="text-7xl  mt-5 text-white " />
              </div>
              <div className="text flex-col mt-2  justify-center">
                <div className=" text-center text-lg text-slate-200">Total Amount</div>
                <div className="text-2xl text-center font-mono font-medium m-1 text-slate-200">₹{Amount}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom h-[80vh]">
          <h2 className="mx-5 font-semibold">Recent Orders:</h2>
          <div className=" m-4 max-w-7xl">
          <div className="grid grid-cols-6 gap-10">
          <div className="col-span-1 text-center font-semibold text-gray-700">Index</div>
          <div className="col-span-1 text-center font-semibold text-gray-700">Date</div>
          <div className="col-span-1 text-center font-semibold text-gray-700">Order ID</div>
          <div className="col-span-1 text-center font-semibold text-gray-700">Total</div>
          <div className="col-span-1 text-center font-semibold text-gray-700">Status</div>
          <div className="col-span-1 text-center font-semibold text-gray-700">
            Cancel Order
          </div>
        </div>
        {orders.slice(starting_index,ending_index).map((order, index) => (
          <div
            key={order._id}
            className="grid grid-cols-6 gap-8 shadow-md py-5"
          >
            <div className="col-span-1 text-center  ">{starting_index +  index + 1}</div>
            <div className="col-span-1 text-start">
              {moment(order.createdAt).format("Do MMM YYYY, h:mm a")}
            </div>
            <div className="col-span-1 text-center ">#{order._id}</div>
            <div className="col-span-1 text-center  ">₹{order.totalPrice}</div>
            <div className="col-span-1 text-center">{order.status}</div>
            <div className="col-span-1 text-center " onClick={() => removeOrder(order)}>
              <button onClick={toggleModal}>
                {" "}
                <ClearOutlinedIcon
                  style={{ color: "orangered", font: "1rem" }}
                />
              </button>
            </div>
          </div>
        ))}
          </div>
          <Pagination currpage={currpage} Total_pages={Total_pages} changepage={changepage} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
