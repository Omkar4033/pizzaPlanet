import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./Screens/Menu";
import OrderForm from "./components/OrderForm";
import ConfirmationPage from "./components/ConfirmationPage";
import Cart from "./Screens/Cart";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
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
import Contact from "./Screens/Contact";
import About from "./Screens/About";
import Error from "./Screens/Error";
import Payment from "./Screens/Payment";
import SingleProduct from "./components/SingleProduct";
import UpdateProduct from  "./Admin/UpdateProduct";
const App = () => {
  const [curruser, setCurruser] = useState({});
  const [cart, setcart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    try {
      setCurruser(JSON.parse(localStorage.getItem("MypizzaUser")));
      if (localStorage.getItem("cart")) {
        let Initial_cart = JSON.parse(localStorage.getItem("cart"));
        let total = Initial_cart.reduce((total, item) => total + item?.Itemprice, 0);
        setSubTotal(total);
        setcart(Initial_cart);
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

 
  

  const updateUser = (user) => {
    localStorage.setItem("MypizzaUser", JSON.stringify(user));
    setCurruser(user);
  };
  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let total = cart.reduce((total, item) => total + item?.Itemprice, 0);
    setSubTotal(total);
    setcart(mycart);
  };

  const addToCart = (cartItem, varient, qty) => {
    let newCart = cart;
    let itemToUpdate = cart.find((food) => food.name === cartItem.name);
    if (itemToUpdate) {
      itemToUpdate.quantity = itemToUpdate.quantity + qty;
      itemToUpdate.varient = varient;
      itemToUpdate.Itemprice =
      cartItem?.prices[0].default[0][varient]  * itemToUpdate.quantity;

      if (itemToUpdate.quantity > 10) {
        itemToUpdate.quantity = 10;
      }
    } else {
      newCart = [].concat(cart, cartItem);
    }

    saveCart(newCart);
    console.log("Cart addeed is : ",newCart);
  };
  const RemoveFromCart = (cartItem, varient, quantity) => {
    let newCart = cart;
    let itemToUpdate = cart.find((food) => food.name === cartItem.name);
    if (itemToUpdate) {
      itemToUpdate.quantity = itemToUpdate.quantity - quantity;
      itemToUpdate.varient = varient;
      itemToUpdate.Itemprice =
      cartItem?.prices[0].default[0][varient]  * itemToUpdate.quantity;

      if (itemToUpdate.quantity <= 0) {
        let filtered = cart.filter((food) => food.name !== itemToUpdate.name);
        newCart = filtered;
      }
    }

    saveCart(newCart);
  };

  const RemoveAll = () => {
    let newCart = [];
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
            <Route path="/about" element={<About curruser={curruser} />} />
            <Route path="/Contact" element={<Contact curruser={curruser} />} />
            <Route
              path="/payment"
              element={
                <Payment
                  cart={cart}
                  subTotal={subTotal}
                  RemoveAll={RemoveAll}
                  curruser={curruser}
                />
              }
            />
            <Route path="*" element={<Error />} />
            <Route
              path="/pizzas/:id"
              element={<SingleProduct addToCart={addToCart} />}
            ></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  curruser={curruser}
                  cart={cart}
                  RemoveFromCart={RemoveFromCart}
                  addToCart={addToCart}
                  subTotal={subTotal}
                  RemoveAll={RemoveAll}
                />
              }
            />
            {curruser && <Route exact path="/" element={<Hero />} />}
            {!curruser && (
              <Route path="/" element={<Login updateUser={updateUser} />} />
            )}
            <Route
              path="/OrderForm"
              element={
                <OrderForm
                  curruser={curruser}
                  cart={cart}
                  addToCart={addToCart}
                />
              }
            />
            <Route path="/confirmation" element={<ConfirmationPage curruser={curruser} />} />
            {curruser && (
              <Route path="/orders" element={<Orders curruser={curruser} />} />
            )}
            {{
              /* curruser &&  curruser.isAdmin */
            } && (
              <Route
                path="/admin"
                element={<AdminDashboard updateUser={updateUser} />}
              />
            )}
            {curruser && !curruser.isAdmin && (
              <Route
                path="/admin"
                element={<WrongAdmin updateUser={updateUser} />}
              />
            )}
            <Route
              path="/admin/dashboard"
              element={<Dashboard curruser={curruser} />}
            />
            <Route
              path="/admin/addproduct"
              element={<AddProduct curruser={curruser} />}
            />
            <Route
              path="/admin/orders"
              element={<AdminOrders curruser={curruser} />}
            />
            <Route
              path="/admin/pizzas"
              element={<Pizzas curruser={curruser} />}
            />
            <Route
              path="/admin/users"
              element={<AdminUsers curruser={curruser} />}
            />
            <Route
              path="/admin/profile"
              element={<Profile curruser={curruser} />}
            />
            <Route
              path="/admin/reportbug"
              element={<ReportBug curruser={curruser} />}
            />
            <Route
              path="/admin/pizzas/update/:id"
              element={<UpdateProduct />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
