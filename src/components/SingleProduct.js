import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GET_SINGLE_OBJECT_API_ENDPOINT = "/api/pizzas/:id";

const SingleProduct = ({ addToCart }) => {
  const [item, setItem] = useState();
  const { id } = useParams();
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const FetchSingleproduct = async () => {
      try {
        const { data } = await axios.get(
          GET_SINGLE_OBJECT_API_ENDPOINT.replace(":id", id)
        );
        setItem(data);
      } catch (error) {
        console.error("Error fetching single object:", error);
      }
    };

    FetchSingleproduct();
  }, [id]);

  const AddToCart = (item, varient, quantity) => {
    var cartItem = {
      name: item?.name,
      varient: varient,
      varients:item.varients,
      quantity: quantity,
      prices: item?.prices,
      Itemprice: item?.prices[0].default[0][varient] * quantity,
    };
    addToCart(cartItem);
  };

  console.log("single Product is : ", item);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            src={"/" + process.env.PUBLIC_URL + "Images/sample.jpg"}
            alt={"Pizza_Image"}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              pizzaPlanet
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item?.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a href={"/"} className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href={"/"} className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href={"/"} className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{item?.description}</p>
            <div className="flex flex-col">
              <div className="flex justify-between px-4 py-2 bg-gray-200 font-bold">
                <div className="w-1/2">Ingredients</div>
                <div className="w-1/2">Name</div>
              </div>
              <div className="flex justify-between px-4 py-2 border-b">
                <div className="w-1/2">Toppings</div>
                <div className="w-1/2">{item?.toppings}</div>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="w-1/2">Crust</div>
                <div className="w-1/2">{item?.crust}</div>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-3 items-center">
                <div className="flex mx-6 space-x-4">
                  <span className="mr-3 flex text-green-600 justify-center ">
                    Varient
                  </span>
                  <div className="relative w-full ">
                    <select
                      className="shadow hover:border-yellow-400 appearance-none border rounded  w-[1/2] mx-1  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="one"
                      name="size"
                      value={varient}
                      onChange={(e) => setVarient(e.target.value)}
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
                  <span className="mr-3 text-green-600">Quantity</span>
                  <div className="relative">
                    <select
                      className="shadow hover:border-yellow-400 appearance-none border rounded  w-12 mx-1  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="two"
                      placeholder="Select Quantity"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    >
                      {[...Array(10).keys()].map((x, idx) => {
                        return (
                          <option key={idx} value={idx + 1}>
                            {idx + 1}
                          </option>
                        );
                      })}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹ {item?.prices[0].default[0][varient]* quantity}
              </span>
              <button
                onClick={() => AddToCart(item, varient, quantity)}
                className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
