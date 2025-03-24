import React from "react";
import styles from "./Product.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useCart } from "../context/cart/CartContext";
import { OrbitProgress } from "react-loading-indicators";

function Product({ id, title, image, price, rating = 0 }) {
  const { addItem, addingProduct } = useCart();

  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<StarIcon key={i} />);
  }
  if (rating % 1 !== 0) {
    stars.push(<StarHalfIcon key="half" />);
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
      {addingProduct ? (
        <div className={styles.loading}>
          <OrbitProgress
            color="#ffd814"
            variant="disc"
            dense
            style={{ fontSize: "6px", fontWeight: "bold" }}
          />
        </div>
      ) : (
        <button
          className={styles.addBtn}
          onClick={() => addItem({ id, quantity: 1 })}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default Product;
