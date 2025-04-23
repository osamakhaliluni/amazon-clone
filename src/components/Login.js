import React, { useState } from "react";
import styles from "./login.module.css";
import logo from "../images/login_logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loggedIn } = useAuth();

  if (loggedIn) {
    window.location.href = "/";
  }
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
        <h5>password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className={styles.continueBtn}
          onClick={() => {
            signIn({ email, password });
          }}
        >
          Continue
        </button>
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
