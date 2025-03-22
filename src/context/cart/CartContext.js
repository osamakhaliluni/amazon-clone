import { createContext, useContext } from "react";

export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {},
  updateQuantity: (itemId, quantity) => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);
