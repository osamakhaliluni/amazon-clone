import React from "react";
import styles from "./CartItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function CartItem({ title, image, price, quantity }) {
  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.quantity}>
          <DeleteOutlineIcon />
          {quantity}
          <AddIcon />
        </p>
      </div>
      <div className={styles.price}>
        <p>${price}</p>
      </div>
    </div>
  );
}
