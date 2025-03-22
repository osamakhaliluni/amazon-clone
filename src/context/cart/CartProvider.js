import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const addProduct = (product) => {
    // Add the product to the cart array
    // Update the total price and total quantity
  };
  const removeProduct = (productId) => {
    // Remove the product from the cart array
    // Update the total price and total quantity
  };
  return (
    <CartContext.Provider
      value={{ cart, totalPrice, totalQuantity, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
