import { createContext, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const UserContext = createContext();

export function AuthProvider({ children }) {
  const [usern, setUsern] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUsern(currentUser);
      console.log(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ createUser, usern, logout, login }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(UserContext);
};
