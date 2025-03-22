import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import CartProvider from "./context/cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
