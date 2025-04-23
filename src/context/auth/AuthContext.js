import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: {},
  loading: false,
  error: false,
  loggedIn: false,
  errorMessage: "",
  signIn: (data) => {},
  signOut: () => {},
  register: (data) => {},
});

export const useAuth = () => useContext(AuthContext);
