import React, { useState } from "react";
import styles from "./login.module.css";
import logo from "../images/login_logo.svg";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  return (
    <div className={styles.login}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign in</h1>
        <h5>Email or mobile phone number</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button className={styles.continueBtn}>Continue</button>
        <p>
          By continuing, you agree to FAKE AMAZON CLONE's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <div className={styles.centeredLine}>
        <p>New to Amazon?</p>
      </div>
      <button className={styles.registerBtn}>Create your Amazon account</button>
    </div>
  );
}

export default Login;
