import React, { useState } from "react";
import logo from "../logo.svg";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart/CartContext";
import { useAuth } from "../context/auth/AuthContext";
import LoginList from "./LoginList";

export default function Header() {
  const { totalQuantity } = useCart();
  const { loggedIn, user } = useAuth();

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
        <div className={styles.option}>
          <span className={styles.optionLineTwo}>EN</span>
        </div>
        <div className={[styles.option, styles.list].join(" ")}>
          {loggedIn ? (
            <span className={styles.optionLineOne}>
              Hello, {user.firstName}
            </span>
          ) : (
            <span className={styles.optionLineOne}>Hello, Sign in</span>
          )}

          <span className={styles.optionLineTwo}>Accounts & Lists</span>
          <div className={styles.popup}>
            <LoginList />
          </div>
        </div>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Returns</span>
          <span className={styles.optionLineTwo}>&Orders</span>
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
