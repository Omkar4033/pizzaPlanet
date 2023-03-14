import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Navbar = ({ cart, curruser, updateUser }) => {
  const [dropdown, setDropdown] = useState(false);

  const setLogout = () => {
    updateUser(null);
  };

  console.log("value in navbar is", cart);

  return (
    <nav className="bg-white inset-0 shadow-lg">
      <div className="container inset-0 mx-auto px-4">
        <div className="flex inset-0 justify-between space-x-1">
          <div className="left flex">
            <Link to="/" className="inline-flex items-center  py-3 px-3">
              <span className="font-bold text-2xl flex font-['Poppins', sans-serif] font-bold">
                <img
                  style={{ background: "white", objectFit: "fill" }}
                  width={"42px"}
                  height="8px"
                  alt="Img"
                  src={process.env.PUBLIC_URL + "Images/logo.jpg"}
                />
                pizzaPlanet
              </span>
            </Link>
            {
              <Link
                to="/menu"
                className="py-6 px-3 text-gray-600 hover:text-gray-800"
              >
                Menu
              </Link>
            }
          </div>

          <div className="right flex">
            {curruser ? (
              <div className="user flex inset-0 py-6">
                <div className="relative justify-center flex text-left">
                  <div className="justify-center">
                    <button
                      type="button"
                      className="delay-100  inline-flex w-full justify-center  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => {
                        setDropdown(!dropdown);
                      }}
                    >
                      {curruser.name}
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {dropdown && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-36 origin-top-right border-black rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1">
                        <Link
                        to="/orders"
                          className="text-gray-700 block  px-4 py-2 text-sm"
                        >
                          Orders
                        </Link>
                        <hr className="text-black" />
                        <Link to="/login">
                          <button
                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                            onClick={setLogout}
                          >
                            <LogoutIcon /> Log out
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="authorize flex">
                <Link
                  to="/login"
                  className="py-6 px-3 text-gray-600 hover:text-gray-800"
                >
                  Login
                </Link>
              </div>
            )}
            <Link
              to="/cart"
              className="py-6  text-gray-600 hover:text-gray-800"
            >
              <ShoppingBagOutlinedIcon />
            </Link>
            <span className="text-sm h-5 w-5 justify-center border-white  flex font-bold rounded-xl my-4  bg-orange-500 text-white">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
