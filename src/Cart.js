import React, { useState, useEffect } from "react";
import PaymentForm from "./components/PaymentForm";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Cart = ({ curruser, cart, addToCart, RemoveFromCart }) => {
  const [cartItems, setCart] = useState([]);
  const [showpayment, setShowpayment] = useState(false);
  useEffect(() => {
    setCart(cart);
  }, [cart]);

  console.log("current user is: ", curruser);
  console.log("value in cart is", cart);

  const subtotal = cartItems.reduce((total, item) => total + item.Itemprice, 0);

  return (
    <div className="container flex my-5">
      <div className="first  w-1/2 flex ">
        {
          <div className="flex-col m-auto">
            <h1 className="text-2xl  font-bold mb-4">Your Cart</h1>
            <div className="container  ">
              {cartItems.length === 0 ? (
                <div>
                  <img
                    className="h-80 w-80 my-4 object-cover mr-4"
                    src={process.env.PUBLIC_URL + "Images/empty_cart.jpg"}
                    alt="Your Cart is Empty"
                  />
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      className="h-20 w-20 object-cover mr-4"
                      src={process.env.PUBLIC_URL + "Images/logo.jpg"}
                      alt={item.name}
                    />
                    <div>
                      <h2 className="text-lg">{item.name}</h2>
                      <p className="text-gray-500 text-sm">
                        Price: ₹{item.Itemprice}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Varient: {item.varient}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <button onClick={() => RemoveFromCart(item)}>
                      <DeleteOutlineOutlinedIcon
                        style={{ color: "orangered" }}
                      />
                    </button>
                  </div>
                ))
              )}

              {cartItems.length !== 0 && (
                <div className="flex justify-start mt-4">
                  <span className="font-bold">Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
              )}
              {cartItems.length !== 0 && (
                <button
                  onClick={() => setShowpayment(true)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Pay ₹{subtotal}
                </button>
              )}
            </div>
          </div>
        }
      </div>
      <div className="second   w-1/2 flex m-auto ">
        {showpayment && (
          <PaymentForm
            curruser={curruser}
            setShowpayment={setShowpayment}
            cartItems={cartItems}
            subtotal={subtotal.toFixed(2)}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
