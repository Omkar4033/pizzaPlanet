import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const OrderForm = () => {
  const [confirm, setconfirm] = useState(false);
  const [formData, setFormData] = useState({
    size: "",
    crust: "",
    toppings: [],
    quantity: 1,
  });

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
      const pizza = {
        name: "SureshR",
        toppings: toppings,
        crust: crust,
        size: size,
        price: 80,
      };
      try {
        const res = await axios.post("/api/pizzas", pizza);
        console.log(res);
        setconfirm(true);
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
          <h2 className="text-3xl font-bold mb-4">Build Your Pizza</h2>
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
                  value={formData.quantity}
                  onChange={handleInputChange}
                >
                  <option value="">Select Quantity</option>
                  <option value={1}>1</option>
                  <option value={2} defaultValue={2}>
                    2
                  </option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <button
                onClick={setconfirm}
                type="submit"
                className="bg-yellow-500  text-white py-3 my-10 px-6 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-600 "
              >
                Order Now
              </button>
              {confirm && (
                <Link to="/confirmation">
                  <p>Go to Confirmation page</p>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="img w-1/2 flex  justify-start  my-16">
        <img alt="Img" src={process.env.PUBLIC_URL + "Images/Order.png"} />
      </div>
    </div>
  );
};

export default OrderForm;
