import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

const data_per_page = 2;

const Users = ({ curruser }) => {
  const [users, setusers] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  const starting_index = currpage * data_per_page - data_per_page;
  const ending_index = currpage * data_per_page;
  const Total_pages = Math.ceil(users.length / data_per_page);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const { data } = await axios.get("/api/users");
        console.log("response is ", data);
        setusers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchusers();
  }, []);

  const changepage = (newpage) => {
    setCurrpage(newpage);
  };

  console.log(users);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />

      <div className=" m-5 flex-col max-w-7xl">
        <div className="">
          <h1 className="text-3xl mx-4 font-bold mb-6">All users</h1>
          <div className="mx-4 grid grid-cols-4 gap-2">
            <div className="col-span-1 font-semibold text-gray-700">Index</div>
            <div className="col-span-1 font-semibold text-gray-700">
              User Id
            </div>
            <div className="col-span-1 font-semibold text-gray-700">Name</div>
            <div className="col-span-1 font-semibold text-gray-700">Email</div>
          </div>
          {users.slice(starting_index, ending_index).map((user, index) => (
            <div key={index} className="grid grid-cols-4 gap-1 shadow-md py-5">
              <div className="col-span-1 px-3">
                {starting_index + index + 1}
              </div>
              <div className="col-span-1 ">{user._id}</div>
              <div className="col-span-1 ">{user.name}</div>
              <div className="col-span-1 mr-3 ">{user.email}</div>
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

export default Users;
