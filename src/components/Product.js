/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Product.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useCart } from "../context/cart/CartContext";

function Product({ id, title, image, price, rating }) {
  const { addItem } = useCart();
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon key={i} />);
  }
  return (
    <div className={styles.product}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className={styles.rating}>{stars}</div>
      <button className={styles.addBtn} onClick={addItem({ id, quantity: 1 })}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
