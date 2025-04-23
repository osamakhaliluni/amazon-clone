import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = ({ email, password }) => {
    setLoading(true);
    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          throw new Error(`Failed to login:${response.status}`);
        }
        const data = await response.json();
        setLoggedIn(true);
        setUser(data);
        console.log(data);
      })
      .catch((e) => {
        setError(true);
        setErrorMessage(e.message);
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signOut = () => {
    setUser({});
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        errorMessage,
        loggedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
