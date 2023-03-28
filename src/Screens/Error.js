import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex flex-col items-center  h-screen">
      <img
        className="h-80 w-80 my-4 object-cover mr-4"
        src={process.env.PUBLIC_URL + "Images/404.png"}
        alt="404 Error !"
      />
      <p className="text-xl mb-4">Oops! Page not found</p>
      <NavLink to={"/"}>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Go back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
