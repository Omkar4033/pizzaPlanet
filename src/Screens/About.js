import React from "react";
const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  About Us
                </h1>
                <p className="mt-5 text-lg text-gray-500">
                  At pizzaPlanet, we're passionate about creating the best pizza
                  experience for our customers. We use only the freshest
                  ingredients and our dough is made fresh every day. Our team of
                  expert chefs take great pride in creating unique and delicious
                  pizza toppings that are sure to satisfy your taste buds.
                </p>
              </div>
              <div className="mt-12">
                <h2 className="text-lg text-gray-900 font-medium mb-2">
                  Our Mission
                </h2>
                <p className="text-gray-500">
                  Our mission is to create the best pizza experience for our
                  customers. We aim to provide fresh, delicious and unique pizza
                  toppings that are made with love and care. We believe that
                  pizza is more than just food, it's an experience that brings
                  people together.
                </p>
              </div>
            </div>
              <p className="mb-4 text-bl">Thank you for choosing pizzaPlanet. We look forward to serving you and making your pizza dreams come true.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;