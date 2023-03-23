import Sidebar from "./Sidebar";
import CachedIcon from "@mui/icons-material/Cached";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [total,setTotal]=useState(0);
  // const [pending, setPending] = useState(0);
  // const [completed, setCompleted] = useState(0);
  const [Amount, setAmount] = useState(0);
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
          <div className=" m-5 max-w-7xl">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-1 font-semibold text-gray-700">
                Index
              </div>
              <div className="col-span-1 font-semibold text-gray-700">
                Order ID
              </div>
              <div className="col-span-1 font-semibold text-gray-700">Date</div>
              <div className="col-span-1 font-semibold text-gray-700">
                Total
              </div>
              <div className="col-span-1 font-semibold text-gray-700">
                Status
              </div>
              <div className="col-span-1 font-semibold text-gray-700">
                Cancel Order
              </div>
            </div>
            {orders.map((order, index) => (
              <div
                key={order._id}
                className="grid grid-cols-6 gap-5 shadow-md py-5"
              >
                <div className="col-span-1 mx-6">{index + 1}</div>
                <div className="col-span-1 ">#{order._id}</div>
                <div className="col-span-1">
                  {moment(order.createdAt).format("Do MMM YYYY, h:mm a")}
                </div>
                <div className="col-span-1">{order.totalPrice}</div>
                <div className="col-span-1">
                {order.status}
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
