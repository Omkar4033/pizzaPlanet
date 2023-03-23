import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = ({ curruser }) => {
  const [users, setusers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // axios
    //   .get("/api/users")
    //   .then((res) => {
    //     const temp = res.data;
    //     setusers(temp);
    //   })
    //   .catch((err) => console.log(err));
    const fetchusers=async()=>{
      
      try {
        const {data}= await axios.get("/api/users");
        console.log("response is " ,data);
        setusers(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchusers();
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
      const response = await axios.delete(`/api/users/${order._id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(users);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />

      <div className=" m-5 max-w-7xl">
        <h1 className="text-3xl mx-4 font-bold mb-6">All users</h1>
        <div className="mx-4 grid grid-cols-4 gap-2">
          <div className="col-span-1 font-semibold text-gray-700">Index</div>
          <div className="col-span-1 font-semibold text-gray-700">User Id</div>
          <div className="col-span-1 font-semibold text-gray-700">Name</div>
          <div className="col-span-1 font-semibold text-gray-700">Email</div>
        </div>
        {users.map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-1 shadow-md py-5"
          >
            <div className="col-span-1 px-3">{index + 1}</div>
            <div className="col-span-1 ">{user._id}</div>
            <div className="col-span-1 ">{user.name}</div>
            <div className="col-span-1 mr-3 ">{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
