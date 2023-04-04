import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrImage } from "react-icons/gr";

const GET_SINGLE_OBJECT_API_ENDPOINT = "/api/pizzas/:id";

const UpdateProduct = ({}) => {
  const [item, setItem] = useState();
  const { id } = useParams();
  useEffect(() => {
    const FetchSingleproduct = async () => {
      try {
        const { data } = await axios.get(
          GET_SINGLE_OBJECT_API_ENDPOINT.replace(":id", id)
        );
        setItem(data);
        setFormData({
          Name: data?.name,
          Image: "",
          size: data?.varient,
          crust: data?.crust,
          toppings: data?.toppings,
          quantity: data?.quantity,
        });
        console.log("items to be updated is : ", data);
      } catch (error) {
        console.error("Error fetching single object:", error);
      }
    };

    FetchSingleproduct();
  }, [id]);
  const [formData, setFormData] = useState({
    Name: "",
    Image: "",
    size: "",
    crust: "",
    toppings: "",
    quantity: "",
  });
  // const [ImageView, setImage] = useState("");
  const notify = () => toast("Added to cart !");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("inside the submit function");

    const { Name, Image, size, crust, toppings, quantity } = formData;

    const pizza = {
      name: Name,
      Image: Image.substring(12),
      toppings: toppings,
      crust: crust,
      size: size,
      quantity: Number(quantity),
      price: 80,
    };
    // setImage(Image);
    console.log("selected Image is : ", Image);
    try {
      const id = item._id;
      const { data } = await axios.put(`/api/pizzas/${id}`, pizza);
      console.log("changed data is ", data);

      notify();
      setFormData({
        Name: "",
        Image: "",
        size: "",
        crust: "",
        toppings: [],
        quantity: 1,
      });
    } catch (error) {
      console.log("found error!");
    }
  };

  console.log(formData);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="div">
        <h2 className="text-3xl my-3  mx-8 font-bold mb-4">Update a Product</h2>

        <div className="main flex  md:flex-row  ">
          <div className="container flex w-[120px] ">
            <div className=" my-6   mx-auto w-[80px]">
              <form
                method="post"
                className="bg-white flex  shadow-md rounded w-[1000px] px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <div className="container flex justify-around">
                  <div className="first ">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="Name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow placeholder:text-slate-600 appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Name"
                        name="Name"
                        placeholder="Name of Product"
                        multiple={false}
                        value={formData.Name}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="size"
                      >
                        Size
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="size"
                        name="size"
                        multiple={false}
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
                        className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="toppings"
                        name="toppings"
                        multiple={false}
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
                        className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="crust"
                        name="crust"
                        multiple={false}
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
                        className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        name="quantity"
                        multiple={false}
                        value={formData.quantity}
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
                      Update
                    </button>

                    <ToastContainer
                      position="top-center"
                      autoClose={1000}
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
                  <div className="second flex text-center mt-6 justify-center">
                    {/* <img src={ImageView} alt="selected Image"/> */}
                    <div className="mb-4">
                      <div className="flex justify-center">
                        {formData.Image ? (
                          <img
                            style={{
                              background: "white",
                              objectFit: "contain",
                            }}
                            width={"250px"}
                            height="250px"
                            alt="Img"
                            src={`"/" + process.env.PUBLIC_URL + "Images/${formData.Image}`}
                          />
                        ) : (
                          <GrImage
                            style={{
                              width: "250px",
                              height: "250px",
                              objectFit: "contain",
                            }}
                          />
                        )}
                      </div>
                      <div className="flex-col m-3">
                        <input
                          className="shadow text-red-500 placeholder:text-slate-600 appearance-none border rounded w-[300px] py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          id="Image"
                          type="file"
                          name="Image"
                          placeholder="Upload Product Image"
                          multiple={false}
                          value={formData.Image}
                          onChange={handleInputChange}
                        />
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="Name"
                        >
                          Upload Image
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
