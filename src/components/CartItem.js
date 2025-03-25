import React from "react";
import styles from "./CartItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../context/cart/CartContext";
import { OrbitProgress } from "react-loading-indicators";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartItem({ id, title, image, price, quantity }) {
  const { addItem, addingProduct } = useCart();
  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.quantity}>
          {quantity > 1 ? (
            <RemoveIcon
              onClick={() => {
                addItem(id, quantity - 1);
              }}
              className={styles.icon}
            />
          ) : (
            <DeleteOutlineIcon
              onClick={() => {
                addItem(id, quantity - 1);
              }}
              className={styles.icon}
            />
          )}
          {addingProduct ? (
            <OrbitProgress
              color="#ffd814"
              variant="disc"
              dense
              style={{ fontSize: "4px", fontWeight: "bold" }}
            />
          ) : (
            quantity
          )}
          <AddIcon
            onClick={() => {
              addItem(id, quantity + 1);
            }}
            className={styles.icon}
          />
        </p>
      </div>
      <div className={styles.price}>
        <p>${price}</p>
      </div>
    </div>
  );
}
