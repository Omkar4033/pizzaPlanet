import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./Menu";
import OrderForm from "./components/OrderForm"
import ConfirmationPage from "./components/ConfirmationPage";
import Cart from "./Cart";
const App = () => {
  return (
    <>
      <Router>
        <div>
        <Navbar/>
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/" element={<Hero />} />
            <Route path="/OrderForm" element={<OrderForm />} />
            <Route path="/confirmation" element={<ConfirmationPage/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
