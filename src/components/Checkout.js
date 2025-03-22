import React from "react";
import styles from "./Checkout.module.css";
import CartItem from "./CartItem";
import { useCart } from "../context/cart/CartContext";

export default function Checkout() {
  const { items, error, errorMessage, loading, totalQuantity, totalPrice } =
    useCart();
  return (
    <>
      {loading && <p>Loading cart...</p>}
      {error && <p style={{ color: "red" }}>Error: {errorMessage}</p>}
      {!loading && !error && (
        <div className={styles.checkout}>
          <div className={styles.cartContainer}>
            <h2 className={styles.title}>Shopping Cart</h2>
            <div className={styles.product}>
              {items.map((product) => (
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
                Subtotal ({totalQuantity} items) : <b>${totalPrice}</b>
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
