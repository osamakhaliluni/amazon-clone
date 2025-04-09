import React from "react";
import styles from "./CartItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../context/cart/CartContext";
import { ClipLoader } from "react-spinners";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartItem({ id, title, image, price, quantity }) {
  const { addItem, addingProduct } = useCart();
  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.actions}>
          <p className={styles.quantity}>
            {quantity > 1 ? (
              <RemoveIcon
                onClick={() => {
                  addItem({ id, quantity: quantity - 1 });
                }}
                className={styles.icon}
              />
            ) : (
              <DeleteOutlineIcon
                onClick={() => {
                  addItem({ id, quantity: quantity - 1 });
                }}
                className={styles.icon}
              />
            )}
            {addingProduct[id] ? (
              <ClipLoader
                color="#ffd814"
                // cssOverride={{
                //   fontWeight: "900",
                // }}
                size={20}
              />
            ) : (
              quantity
            )}
            <AddIcon
              onClick={() => {
                addItem({ id, quantity: quantity + 1 });
                console.log(id);
              }}
              className={styles.icon}
            />
          </p>
          <span>Delete</span>
          <span>Save for later</span>
          <span>Share</span>
        </div>
      </div>
      <div className={styles.price}>
        <p>${price}</p>
      </div>
    </div>
  );
}
