import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = ({  addToCart }) => {
  const [menu, setmenu] = useState([]);

  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchmenu = async () => {
      const { data } = await axios.get("/api/pizzas");
      setmenu(data);
    };
    fetchmenu();
  }, []);

  const AddToCart = (item, varient, quantity) => {
    var cartItem = {
      name: item.name,
      varient: varient,
      quantity: quantity,
      prices: item.prices,
      Itemprice: item.prices[0][varient] * quantity,
    };
    addToCart(cartItem);
  };


  return (
    <div className="container  my-10">
      <h2 className="text-3xl font-bold mb-4">Menu</h2>
      <div className="grid lg:grid-cols-3   m-auto md:grid-cols-2 sm:grid-cols-1  gap-4">
        {menu.map((item) => (
          <div
            key={JSON.stringify(item._id)}
            className="bg-white   shadow-md rounded-lg overflow-hidden"
          >
            <h3 className="text-xl m-3 font-bold sm:text-center md:text-start inset-0 mb-2">
              {item.name}
            </h3>
            <img
              src={process.env.PUBLIC_URL + "Images/sample.jpg"}
              alt={item.name}
              className="h-64 w-full object-contain"
            />
            <div className="p-4">
              <div className="new flex ">
                <select
                  className="shadow appearance-none border  w-1/2 mx-1 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="one"
                  name="size"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {item.varients.map((varient,index) => {
                    return (
                      <option key={index} value={varient}>
                        {varient}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="shadow appearance-none border rounded  w-1/2 mx-1  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="two"
                  placeholder="Select Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((x, idx) => {
                    return <option value={idx + 1}>{idx + 1}</option>;
                  })}
                </select>
              </div>
              <div className="second flex justify-around mt-4">
                <div className="text-gray-700 my-auto font-medium">
                  Price : {item.prices[0][varient] * quantity}
                </div>
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded  hover:bg-yellow-600 transition-colors duration-300"
                  onClick={() => AddToCart(item, varient, quantity)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="inline-block mt-4 hover:underline">
        View Cart
      </Link>
    </div>
  );
};

export default Menu;
