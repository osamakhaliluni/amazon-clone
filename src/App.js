import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Checkout from "./components/Checkout";
import CartProvider from "./context/cart/CartProvider";
import Login from "./components/Login";

function App() {
  const location = useLocation();

  const hideHeaderOnRoutes = ["/login"];
  const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

  return (
    <CartProvider>
      <div className="App">
        {!shouldHideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
