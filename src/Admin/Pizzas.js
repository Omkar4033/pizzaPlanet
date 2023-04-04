import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Pagination from "../components/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink } from "react-router-dom";

const data_per_page = 8;

const Pizzas = ({ curruser }) => {
  const [pizzas, setPizzas] = useState([]);
  const [currpage, setCurrpage] = useState(1);

  const starting_index = currpage * data_per_page - data_per_page;
  const ending_index = currpage * data_per_page;
  const Total_pages = Math.ceil(pizzas.length / data_per_page);

  useEffect(() => {
    const Fetchorders = async () => {
      try {
        const { data } = await axios.get("/api/pizzas");
        setPizzas(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    Fetchorders();
  }, []);

  const changepage = (newpage) => {
    setCurrpage(newpage);
  };
  const ChangeDetails = (order) => {
    console.log(order);
  };

  const removeOrder = async (pizza) => {
    console.log("This pizza wants to be removed: ", pizza._id);

    try {
      const response = await axios.delete(`/api/pizzas/${pizza._id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(pizzas);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div>
        <div className=" m-5 flex-col max-w-7xl">
          <h1 className="text-3xl font-bold mb-6">All Pizzas</h1>
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-1 text-center font-semibold text-gray-700">
              Index
            </div>
            <div className="col-span-1 text-start font-semibold text-gray-700">
              Image
            </div>
            <div className="col-span-1 text-center font-semibold text-gray-700">
              Name
            </div>
            <div className="col-span-1 text-center font-semibold text-gray-700">
              Ingredient
            </div>
            <div className="col-span-1 text-center font-semibold text-gray-700"></div>
          </div>
          {pizzas.slice(starting_index, ending_index).map((pizza, index) => (
            <div
              key={pizza._id}
              className="grid grid-cols-5 gap-5 shadow-md py-5"
            >
              <div className="col-span-1 text-center mx-4 ">
                {starting_index + index + 1}
              </div>
              <div className="col-span-1 text-center mx-4 ">
                <img
                  src={"/" + process.env.PUBLIC_URL + "Images/sample.jpg"}
                  alt={"Pizza_Image"}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                />
              </div>
              <div className="col-span-1 text-center mx-4 ">{pizza?.name}</div>
              <div className="col-span-1 text-center mx-4 ">
                {pizza?.toppings[0]} | {pizza?.crust[0]}
              </div>

              <div className="col-span-1 text-center ">
                <NavLink to={`/admin/pizzas/update/${pizza._id}`}>
                  <button onClick={() => ChangeDetails(pizza)}>
                    <EditIcon className="to-yellow-500 mx-6" />
                  </button>
                </NavLink>
                <button onClick={() => removeOrder(pizza)}>
                  {" "}
                  <ClearOutlinedIcon
                    style={{ color: "orangered", font: "1rem" }}
                  />
                </button>
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
    </div>
  );
};

export default Pizzas;
