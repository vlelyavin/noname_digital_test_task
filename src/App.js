import { Header } from "./feature/Header";
import { Footer } from "./feature/Footer";
import { Products } from "./pages/Products";

import "./App.scss";
import { Menu } from "./feature/Menu";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { ProductDetails } from "./pages/ProductDetails";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile/Profile";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
