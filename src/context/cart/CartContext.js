import { createContext, useContext } from "react";

export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  loading: false,
  error: false,
  errorMessage: "",
  getCart: (id) => {},
  addItem: (item) => {},
  removeItem: (itemId) => {},
  updateQuantity: (itemId, quantity) => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);
