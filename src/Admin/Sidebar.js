import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SellIcon from "@mui/icons-material/Sell";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-white mt-1 h-[100vh] w-[240px] px-4 hover:rounded-lg py-8">
      <div className="flex flex-col items-center justify-center "></div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} >
              <DashboardRoundedIcon className="mx-1" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/profile"
               className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} >
              <AccountCircleIcon className="mx-1" /> My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/orders"
               className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} 
            >
              <SellIcon className="mx-1" />
              All Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/pizzas"
               className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} 
            >
              <LocalPizzaIcon className="mx-1" />
              All Pizzas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
               className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} 
            >
              <CheckCircleIcon className="mx-1" />
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/addproduct"
               className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} 
            >
              <AddCircleOutlinedIcon className="mx-1" />
              Add a Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/reportbug"
               className={({ isActive }) => isActive ? "flex items-center  py-4 px-4 rounded-lg  bg-orange-600 text-slate-200" : "flex items-center text-black py-4 px-4    hover:scale-105 hover:border-current  hover:text-black hover:border-l-orange-500 hover:border-l-2"} 
            >
              <AdbIcon className="mx-1" />
              Report Bugs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
