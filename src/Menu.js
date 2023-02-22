import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await axios.get('/api/menu');
      setMenuItems(response.data);
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id} className="mb-4">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="mb-2">{item.description}</p>
            <p className="text-gray-700">${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
