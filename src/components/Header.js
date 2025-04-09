import React from "react";
import logo from "../logo.svg";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart/CartContext";

export default function Header() {
  const { totalQuantity } = useCart();
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
        />
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.nav}>
        <Link to="/login">
          <div className={styles.option}>
            <span className={styles.optionLineOne}>Hello</span>
            <span className={styles.optionLineTwo}>Sing in</span>
          </div>
        </Link>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Returns</span>
          <span className={styles.optionLineTwo}>Orders</span>
        </div>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Your</span>
          <span className={styles.optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={styles.option}>
            <span className={`${styles.optionLineTwo} ${styles.basketCount}`}>
              {totalQuantity}
            </span>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
