import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import CartItem from "./CartItem";

export default function Checkout() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/carts/5")
      .then(async (response) => {
        if (response.status !== 200) {
          throw new Error(`Failed to fetch cart:${response.status}`);
        }
        const data = await response.json();
        setSubtotal(data.total);
        setQuantity(data.totalQuantity);
        const myProduct = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          quantity: product.quantity,
          total: product.total,
        }));
        setProducts(myProduct);
      })
      .catch((e) => {
        setError(true);
        setErrorMessage(e.message);
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <p>Loading cart...</p>}
      {error && <p style={{ color: "red" }}>Error: {errorMessage}</p>}
      {!loading && !error && (
        <div className={styles.checkout}>
          <div className={styles.cartContainer}>
            <h2 className={styles.title}>Shopping Cart</h2>
            <div className={styles.product}>
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.totalContainer}>
              <p className={styles.total}>
                Subtotal ({quantity} items) : <b>${subtotal}</b>
              </p>
              <p className={styles.checkbox}>
                <input type="checkbox" />
                This order contains a gift
              </p>
              <button className={styles.checkoutBtn}>
                Proceed to checkout
              </button>
            </div>
            <div className={styles.suggestContainer}></div>
          </div>
        </div>
      )}
    </>
  );
}
