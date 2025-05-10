import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import logo from "../images/login_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";
import ErrorIcon from "@mui/icons-material/Error";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loggedIn, error, errorMessage } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <div className={styles.login}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      {error && (
        <div className={styles.errorMessage}>
          <p>
            <ErrorIcon className={styles.errorIcon} />
            There was a problem
          </p>
          {errorMessage}
        </div>
      )}
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
          disabled={!email || !password}
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
