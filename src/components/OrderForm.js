import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OrderForm = ({ curruser, addToCart, cart }) => {
  const [formData, setFormData] = useState({
    size: "",
    crust: "",
    toppings: [],
    quantity: 1,
  });
  const notify = () => toast("Added to cart !");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("inside the submit function");

    const { size, crust, toppings, quantity } = formData;

    if (!size || !crust || toppings.length === 0 || quantity < 1) {
      alert("Please fill all the required fields.");
      return;
    } else {
      try {
        var cartItem = {
          name: "#Custom Pizza",
          varient: size,
          toppings:toppings,
          crust:crust,
          varients: ["small", "medium", "large"],
          quantity: quantity,
          prices: [{ small: 300, medium: 350, large: 400 }],
          Itemprice: 400,
        };
        addToCart(cartItem);
        console.log(cart);
        notify();
        setFormData({
          size: "",
          crust: "",
          toppings: [],
          quantity: 1,
        });
      } catch (error) {
        console.log("found error!");
      }
    }
  };

  console.log(formData);
  return (
    <div className="main flex  md:flex-row justify-center ">
      <div className="container flex w-1/2 ">
        <div className=" my-6   mx-auto w-2/3">
          <h2 className="text-3xl font-bold mb-4">Build Your own Pizza</h2>
          <form
            method="post"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="size"
                >
                  Size
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                >
                  <option value="">Selecte pizza size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="toppings"
                >
                  Toppings
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="toppings"
                  name="toppings"
                  value={formData.toppings}
                  onChange={handleInputChange}
                >
                  <option value="">Select Toppings</option>
                  <option value="Pepperoni">Pepperoni</option>
                  <option value="Mushrooms">Mushrooms</option>
                  <option value="Bacon">Bacon</option>
                  <option value="Peppers">Peppers</option>
                  <option value="Chicken">Chicken</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="size"
                >
                  Crust
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="crust"
                  name="crust"
                  value={formData.crust}
                  onChange={handleInputChange}
                >
                  <option value="">Select a crust</option>
                  <option value="Stuffed">Stuffed </option>
                  <option value="Cracker">Cracker </option>
                  <option value="Flat Bread">Flat Bread</option>
                  <option value="Cheese">Cheese </option>
                  <option value="Thin">Thin </option>
                  <option value="Thick">Thick </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="size"
                >
                  Quantity
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  name="quantity"
                  value={parseInt(formData.quantity)}
                  onChange={handleInputChange}
                >
                  <option value="">Select Quantity</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-yellow-500  text-white py-3 my-10 px-6 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-600 "
              >
                Order Now
              </button>

              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="img w-1/2 flex  justify-start  my-16">
        <img
          alt="Img"
          className="object-contain"
          src={process.env.PUBLIC_URL + "Images/Order.png"}
        />
      </div>
    </div>
  );
};

export default OrderForm;
