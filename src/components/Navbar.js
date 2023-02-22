import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white inset-0 shadow-lg">
      <div className="container inset-0 mx-auto px-4">
        <div className="flex inset-0 justify-between">
          <Link to="/" className="inline-flex items-center py-3 px-3">
            <span className="font-bold text-2xl flex font-['Poppins', sans-serif] font-bold">
            <img style={{background:"white",objectFit:"fill"}} width={"42px"} height="8px" alt="Img" src={process.env.PUBLIC_URL+"Images/logo.jpg"} />
              pizzaPlanet
            </span>
          </Link>
          <div className="inline-flex items-center">
            <Link
              to="/"
              className="py-6 px-3 text-gray-600 hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="py-6 px-3 text-gray-600 hover:text-gray-800"
            >
              Menu
            </Link>
            <Link
              to="/cart"
              className="py-6 px-3 text-gray-600 hover:text-gray-800"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
