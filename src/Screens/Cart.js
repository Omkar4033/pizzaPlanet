import React, { useState, useEffect } from "react";
import PaymentForm from "../components/PaymentForm";
import { NavLink } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Cart = ({ curruser, cart, addToCart, RemoveFromCart, subTotal }) => {
  const [cartItems, setCart] = useState([]);
  const [varient] = useState();
  const [showpayment, setShowpayment] = useState(false);
  useEffect(() => {
    setCart(cart);
  }, [cart]);

  console.log("current user is: ", curruser);
  console.log("value in cart is", cart);

  const setInputs = (e, index, item) => {
    const { value } = e.target;
    addToCart(item, value, 0);
  };

  return (
    <div className="container flex my-5">
      <div className="first  flex ">
        {
          <div className="flex-col m-auto">
            <h1 className="text-2xl ml-5  font-bold mb-4">Your Cart</h1>
            <div className="container  ">
              {cartItems.length === 0 ? (
                <div>
                  <img
                    className="h-80 w-80 my-4 object-cover mr-4"
                    src={process.env.PUBLIC_URL + "Images/empty_cart.jpg"}
                    alt="Your Cart is Empty"
                  />
                </div>
              ) : (
                <div className="">
                  <div className="">
                    <div className=" w-screen flex-col">
                      <div className="flex px-4 py-2 bg-gray-200 font-bold">
                        <div className="w-1/2">Product</div>
                        <div className="w-1/2">Varient</div>
                        <div className="w-1/2">Quantity</div>
                        <div className="w-1/2">Price</div>
                        <div className="w-1/2">Remove Item</div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex-col w-screen">
                    {cartItems.map((item, index) => (
                      <div key={index} className="w-screen justify-center ">
                        <div className="flex border-2 justify-center px-4 py-2 font-semibold">
                          <div className="w-1/2 flex">
                            <img
                              className="h-20 w-20 object-cover mr-4"
                              src={process.env.PUBLIC_URL + "Images/logo.jpg"}
                              alt={item?.name}
                            />
                            {item?.name}
                          </div>
                          <div className="w-1/2 mt-8">
                            <select
                              className="shadow hover:border-yellow-400 appearance-none border rounded  w-[1/2] mx-1  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="one"
                              name="size"
                              value={varient}
                              onChange={(e) => setInputs(e, index, item)}
                            >
                              {item?.varients?.map((v, keys) => {
                                return (
                                  <option key={keys} value={v}>
                                    {v}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="w-1/2 mt-4 ">
                            <button
                              className="mx-4 text-3xl "
                              onClick={() =>
                                RemoveFromCart(item, item?.varient, 1)
                              }
                            >
                              -
                            </button>
                            {item?.quantity}
                            <button
                              className="mx-4 text-3xl "
                              onClick={() => addToCart(item, item.varient, 1)}
                            >
                              +
                            </button>
                          </div>
                          <div className="w-1/2 mt-8">{item?.Itemprice}</div>
                          <div className="w-1/2 mt-8">
                            <button
                              onClick={() =>
                                RemoveFromCart(
                                  item,
                                  item?.varient,
                                  item?.quantity
                                )
                              }
                            >
                              <DeleteOutlineOutlinedIcon
                                style={{ color: "orangered" }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {cartItems.length !== 0 && (
                <div className="flex justify-start mt-8">
                  <span className="font-bold">Subtotal:</span>
                  <span>₹{subTotal.toFixed(2)}</span>
                </div>
              )}
              {cartItems.length !== 0 && (
                <NavLink>
                  <button
                    onClick={() => setShowpayment(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Checkout
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        }
      </div>
      <div className="second   w-1/2 flex m-auto ">
        {showpayment && (
          <PaymentForm
            curruser={curruser}
            setShowpayment={setShowpayment}
            cartItems={cartItems}
            subTotal={subTotal.toFixed(2)}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
