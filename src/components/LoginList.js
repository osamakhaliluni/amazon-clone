import React from "react";
import styles from "./LoginList.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginList() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign in
        </button>
        <p>
          New customer? <span>Start here.</span>
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.list}>
          <h2>Your Lists</h2>
          <span>Create a List</span>
          <span>Find a List or Registry</span>
        </div>
        <div className={styles.account}>
          <h2>Your Account</h2>
          <span>Account</span>
          <span>Orders</span>
          <span>Recommendations</span>
          <span>Browsing History</span>
          <span>Watchlist</span>
          <span>Video Purchases & Rentals</span>
          <span>Kindle Unlimited</span>
          <span>Content & Devices</span>
          <span>Subscribe & Save Items</span>
          <span>Memberships & Subscriptions</span>
          <span>Music Library</span>
        </div>
      </div>
    </div>
  );
}
