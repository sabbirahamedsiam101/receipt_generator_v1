import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const authInfo = {
    user,
    signIn,
    logOut
  };
  console.log("current user", user);
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
