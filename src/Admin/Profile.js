import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [message, setMessage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
   
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const res = await fetch('/api/user/profile', {
        //   headers: { Authorization: `Bearer ${authState.token}` },
        // });
        // const data = await res.json();
        setUser("omkar");
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />

      <div className="flex flex-col mt-10 items-center w-full h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">My Profile</h1>
        <div className="w-96">
          {message && (
            <div className="bg-green-500 p-3 mb-4 text-white">{message}</div>
          )}
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
