import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Pagination from "../components/Pagination";
import { Add } from "@mui/icons-material";

const data_per_page = 8;

const Menu = ({ addToCart, cart }) => {
  const [menu, setmenu] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  const starting_index = currpage * data_per_page - data_per_page;
  const ending_index = currpage * data_per_page;
  const Total_pages = Math.ceil(menu.length / data_per_page);

  useEffect(() => {
    const fetchmenu = async () => {
      const { data } = await axios.get("/api/pizzas");
      setmenu(data);
      console.log(data);
    };
    fetchmenu();
  }, []);

  const changepage = (newpage) => {
    setCurrpage(newpage);
  };

  const AddToCart = (item, qty) => {
    let cartItem = {};

    cartItem = {
      name: item.name,
      varient: "small",
      quantity: qty,
      varients: item.varients,
      prices: item.prices,
      toppings: item.toppings,
      crust: item.crust,
      Itemprice: item?.prices[0].default[0]['small'] * qty,
    };

   

    addToCart(cartItem, "small", 1);
    console.log("ITemPrice is : ",item?.prices[0].default[0]['small'] );
  };

  return (
    <div className="container  my-10">
      <h2 className="text-3xl mx-6 font-bold mb-4">Menu</h2>
      <div className="grid lg:grid-cols-4 justify-center   m-auto md:grid-cols-2 sm:grid-cols-1  gap-4">
        {menu.slice(starting_index, ending_index).map((item, index) => (
          <div
            key={index}
            className="bg-white    shadow-md rounded-lg overflow-hidden"
          >
            <NavLink key={item._id} to={`/pizzas/${item._id}`}>
              <img
                src={process.env.PUBLIC_URL + "Images/sample.jpg"}
                alt={item.name}
                className="h-64 w-full object-contain"
              />
              <h3 className="text-xl m-3 font-bold sm:text-center md:text-start inset-0 mb-2">
                {item.name}
              </h3>
            </NavLink>
            <div className="p-4">
              <div className="second flex justify-around mt-4">
                <div className="text-gray-700 my-auto font-medium">
                  Price :{" "}
                  {isNaN(item?.prices[0]["small"] * 1)
                    ? 300
                    : item.prices[0]["small"] * 3}
                </div>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded  hover:bg-green-600 transition-colors duration-300"
                  onClick={() => AddToCart(item, 1)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currpage={currpage}
        Total_pages={Total_pages}
        changepage={changepage}
      />
    </div>
  );
};

export default Menu;
