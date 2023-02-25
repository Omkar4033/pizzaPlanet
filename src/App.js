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
    setCurruser(JSON.parse(localStorage.getItem("MypizzaUser")));
  }, []);

  const [curruser, setCurruser] = useState({});

  const updateUser = (user) => {
    localStorage.setItem("MypizzaUser", JSON.stringify(user));
    setCurruser(user);
  };

  return (
    <>
      <Router>
        <div>
          <Navbar curruser={curruser} updateUser={updateUser} />
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login updateUser={updateUser} />} />
            <Route path="/register" element={<Register />} />
            <Route  path="/cart" element={<Cart />} />
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
