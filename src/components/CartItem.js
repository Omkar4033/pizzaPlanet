import React from 'react';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-300 py-4">
      {/* <div className="flex items-center">
        <img className="h-20 w-20 object-cover mr-4" src={item.image} alt={item.name} />
        <div>
          <h2 className="text-lg">{item.name}</h2>
          <p className="text-gray-500 text-sm">Price: {item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="text-gray-500 font-bold text-xl mr-4"
          onClick={() => qtyChangeHandler(item, -1)}
        >
          -
        </button>
        <p className="text-gray-700 font-bold text-xl">{item.qty}</p>
        <button
          className="text-gray-500 font-bold text-xl ml-4"
          onClick={() => qtyChangeHandler(item, 1)}
        >
          +
        </button>
        <button className="text-red-500 font-bold text-lg ml-4" onClick={() => removeHandler(item)}>
          Remove
        </button>
      </div> */}
    </div>
  );
};

export default CartItem;
