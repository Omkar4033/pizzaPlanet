import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menu, setmenu] = useState([]);
  const [cartitems, setCartitems] = useState({
    id: "",
    size: "",
    quantity: 1,
  
  });
 
  const handleInputChange = (event) => {
    const {id, name, value } = event.target;
    if(id === "")
    {
      setCartitems({ ...cartitems, [name]: value,id:id });
    }
    if(event.target.id === cartitems.id)
    setCartitems({ ...cartitems, [name]: value,[id]:id });
  };
  
  useEffect(() => {
    const fetchmenu = async () => {
      const {data} = await axios.get('/api/pizzas');
      setmenu(data);
    };
    fetchmenu();
  }, []);

  const addToCart=(item)=>{
    console.log(cartitems);
  }

  return (
    <div className="container  my-10">
      <h2 className="text-3xl font-bold mb-4">Menu</h2>
      <div className="grid lg:grid-cols-3   m-auto md:grid-cols-2 sm:grid-cols-1  gap-4">
        {menu.map((item) => (
          <div key={item._id} className="bg-white   shadow-md rounded-lg overflow-hidden">
              <h3 className="text-xl m-3 font-bold sm:text-center md:text-start inset-0 mb-2">{item.toppings}</h3>
            <img src={process.env.PUBLIC_URL+"Images/sample.jpg"} alt={item.name} className="h-64 w-full object-contain" />
            <div className="p-4">
             <div className="new flex ">
             <select
                  className="shadow appearance-none border  w-1/2 mx-1 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={`${item._id}`.size}
                  name="size"
                  // value={size}
                  onChange={handleInputChange}
                >
                  <option value="">Varient</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <select
                  className="shadow appearance-none border rounded  w-1/2 mx-1  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={`${item._id}`.quantity}
                  placeholder='Select Quantity'
                  name="quantity"
                  //value={formData.size}
                  onChange={handleInputChange}
                >
                   <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
             </div>
             <div className="second flex justify-around mt-4">
              <div className="text-gray-700 my-auto font-medium">Price : ₹{item.price.toFixed(2)}</div>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded  hover:bg-yellow-600 transition-colors duration-300"
                 onClick={() => addToCart(item)}
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
