import React, { useState } from "react";
// import axios from "axios";
import Sidebar from "./Sidebar";
const ReportBug = () => {
  const [bugDetails, setBugDetails] = useState({
    email: "",
    bug: "",
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBugDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsLoading(true);
    // setIsError(false);

    // try {
    //   const response = await axios.post("/api/report-bug", bugDetails);
    //   setIsLoading(false);
    //   setSuccessMessage(response.data.message);
    // } catch (error) {
    //   setIsLoading(false);
    //   setIsError(true);
    // }
  };

  return (
    <div className="h-screen flex  inset-0 bg-gray-100">
      <Sidebar />

      <div className="flex flex-col inset-0 mt-10  mx-auto items-center ">
        <h1 className="text-2xl font-bold mb-4">Report a Bug</h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://formspree.io/f/xknavppn"
          className="flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={bugDetails.email}
              onChange={handleInputChange}
              className="border border-gray-400 py-2 px-4 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bug" className="block text-gray-700 font-bold mb-2">
              Bug Details
            </label>
            <textarea
              id="bug"
              name="bug"
              placeholder="Describe the bug you found"
              required
              value={bugDetails.bug}
              onChange={handleInputChange}
              className="border border-gray-400 py-2 px-4 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {"Submit"}
          </button>
        </form>
        {/* {isError && (
          <p className="text-red-500 mt-4">
            There was an error submitting the form. Please try again later.
          </p>
        )}
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )} */}
      </div>
    </div>
  );
};

export default ReportBug;
