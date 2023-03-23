import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-section relative h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={process.env.PUBLIC_URL + "Images/Hero.jpg"}
        alt="Pizza"
      />
      <div className="absolute inset-0 bg-black opacity-[0.65]"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-bold mb-4  ">Build Your Own Pizza</h1>
        <p className="text-lg text-yellow-50 shadow-lg font-medium ">Choose your toppings and make your perfect pizza!</p>
        <Link
          to="/OrderForm"
          className="bg-yellow-500 animate-bounce text-white py-3 my-6 px-6 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
