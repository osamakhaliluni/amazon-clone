import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const getCart = (id) => {
    setLoading(true);
    fetch(`https://dummyjson.com/carts/${id}`)
      .then(async (response) => {
        if (response.status !== 200) {
          throw new Error(`Failed to fetch cart:${response.status}`);
        }
        const data = await response.json();
        setTotalPrice(data.total);
        setTotalQuantity(data.totalQuantity);
        const myProduct = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          quantity: product.quantity,
          total: product.total,
        }));
        setItems(myProduct);
        console.log(myProduct);
      })
      .catch((e) => {
        setError(true);
        setErrorMessage(e.message);
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getCart(5);
  }, []);
  const addItem = (item) => {
    // Add the product to the cart array
    // Update the total price and total quantity
  };
  const removeItem = (itemId) => {
    // Remove the product from the cart array
    // Update the total price and total quantity
  };
  return (
    <CartContext.Provider
      value={{
        items,
        totalPrice,
        totalQuantity,
        loading,
        error,
        errorMessage,
        addItem,
        removeItem,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
