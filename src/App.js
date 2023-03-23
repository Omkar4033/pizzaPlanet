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
import Orders from "./components/Orders";
import AdminDashboard from "./Admin/AdminDashBoard";
import WrongAdmin from "./Admin/WrongAdmin";
import Dashboard from "./Admin/Dashboard";
import AddProduct from "./Admin/AddProduct";
import AdminOrders from "./Admin/Orders";
import Pizzas from "./Admin/Pizzas";
import Profile from "./Admin/Profile";
import AdminUsers from "./Admin/Users";
import ReportBug from "./Admin/ReportBug";
const App = () => {
  const [curruser, setCurruser] = useState({});
  const [cart, setcart] = useState([]);
  useEffect(() => {
    try {
      setCurruser(JSON.parse(localStorage.getItem("MypizzaUser")));
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [cart]);

  console.log(curruser);

  const updateUser = (user) => {
    localStorage.setItem("MypizzaUser", JSON.stringify(user));
    setCurruser(user);
  };
  const saveCart = (mycart) => {
    localStorage.setItem("cart", mycart);
    setcart(mycart);
  };

  const addToCart = (cartItem, varient, quantity) => {
    let newCart = cart;
    const index = cart.indexOf(cartItem);
    if (index >= 0) {
      const filtered = cart.filter((item) => item.name === cartItem.name);
      filtered.varient = varient;
      filtered.quantity = quantity;
      newCart[index] = filtered;
    } else {
      newCart = [].concat(cart, cartItem);
    }
    setcart(newCart);
    saveCart(newCart);
  };
  const RemoveFromCart = (cartItem, varient, quantity) => {
    let newCart = cart;
    const index = cart.indexOf(cartItem);
    if (index >= 0) {
      const filtered = cart.filter((item) => item !== cartItem);
      newCart = filtered;
    } else {
      newCart = [].concat(cart, cartItem);
    }
    setcart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <Router>
        <Navbar cart={cart} curruser={curruser} updateUser={updateUser} />
        <div>
          <Routes>
            <Route
              path="/menu"
              element={<Menu cart={cart} addToCart={addToCart} />}
            />
            <Route path="/login" element={<Login updateUser={updateUser} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={
                <Cart
                  curruser={curruser}
                  cart={cart}
                  RemoveFromCart={RemoveFromCart}
                  addToCart={addToCart}
                />
              }
            />
            {curruser && <Route exact path="/" element={<Hero />} />}
            {!curruser && (
              <Route path="/" element={<Login updateUser={updateUser} />} />
            )}
            <Route
              path="/OrderForm"
              element={<OrderForm curruser={curruser} cart={cart} addToCart={addToCart} />}
            />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            {curruser && (
              <Route path="/orders" element={<Orders curruser={curruser} />} />
            )}
            {
               {/* curruser &&  curruser.isAdmin */}
                && (
              <Route
                path="/admin"
                element={<AdminDashboard updateUser={updateUser} />}
              />
            )}
            { curruser &&  !curruser.isAdmin && (
              <Route
                path="/admin"
                element={<WrongAdmin updateUser={updateUser} />}
              />
            )}
            <Route
              path="/admindashboard"
              element={<Dashboard curruser={curruser} />}
            />
            <Route
              path="/adminaddproduct"
              element={<AddProduct curruser={curruser} />}
            />
            <Route
              path="/adminorders"
              element={<AdminOrders curruser={curruser} />}
            />
            <Route
              path="/adminpizzas"
              element={<Pizzas curruser={curruser} />}
            />
            <Route
              path="/adminusers"
              element={<AdminUsers curruser={curruser} />}
            />
            <Route
              path="/adminprofile"
              element={<Profile curruser={curruser} />}
            />
            <Route
              path="/adminreportbug"
              element={<ReportBug curruser={curruser} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
