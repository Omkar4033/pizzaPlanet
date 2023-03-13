import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./Menu";
import OrderForm from "./components/OrderForm";
import ConfirmationPage from "./components/ConfirmationPage";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
const App = () => {
  useEffect(() => {
    try {
      setCurruser(JSON.parse(localStorage.getItem("MypizzaUser")));
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }

  }, []);

  const [curruser, setCurruser] = useState({});
  const [cart, setcart] = useState([]);
  // const [subTotal,setsubTotal]=useState(0);
  const updateUser = (user) => {
    localStorage.setItem("MypizzaUser", JSON.stringify(user));
    setCurruser(user);
  };
  const saveCart=(mycart)=>{
      localStorage.setItem("cart",mycart);
      setcart(mycart);
  }

  const addToCart=(cartItem,varient,quantity)=>{
    let newCart=cart;
    const index = cart.indexOf(cartItem);
    if(index>=0)
    {
        // newCart[index].varient=varient,
        // newCart[index].quantity=quantity
    }
    else
    {
      newCart = [].concat(cart, cartItem);
    }
      setcart(newCart);
      saveCart(newCart);
  
    }
  

  return (
    <>
      <Router>
          <Navbar cart={cart}  curruser={curruser} updateUser={updateUser} />
        <div>
          <Routes>
            <Route path="/menu" element={<Menu cart={cart} addToCart={addToCart} />} />
            <Route path="/login" element={<Login updateUser={updateUser} />} />
            <Route path="/register" element={<Register />} />
            <Route  path="/cart" element={<Cart curruser={curruser} cart={cart} addToCart={addToCart} />} />
            {curruser && (
              <Route exact path="/" element={<Hero/>} />
            ) }
            { !curruser && 
              <Route
                path="/"
                element={<Login updateUser={updateUser} />}
              />
           }
            <Route curruser={curruser} path="/OrderForm" element={<OrderForm />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
