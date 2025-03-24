import { createContext, useContext } from "react";

export const CartContext = createContext({
  items: [],
  cartId: null,
  totalPrice: 0,
  totalQuantity: 0,
  addingProduct: false,
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
