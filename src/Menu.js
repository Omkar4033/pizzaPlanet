import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    const fetchmenu = async () => {
      const {data} = await axios.get('/api/pizzas');
      setmenu(data);
    };
    fetchmenu();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">Menu</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4">
        {menu.map((item) => (
          <div key={item._id} className="bg-white  shadow-md rounded-lg overflow-hidden">
            <img src={process.env.PUBLIC_URL+"Images/sample.jpg"} alt={item.name} className="h-64 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.toppings}</h3>
              <p className="text-gray-700 font-medium">₹{item.price.toFixed(2)}</p>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-600 transition-colors duration-300"
                // onClick={() => addToCart(item)}
              >
                Add to cart
              </button>
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
