import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const baseUrl = "http://localhost:5000";

  /**
   * Log in by gmail
   */
  const googleProvider = new GoogleAuthProvider();
  const handleLogIn = (email) => {
    return signInWithPopup(auth, googleProvider);
  };

  /**
   * Log Out
   */
  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("SignOut Successfully");
      })
      .catch((error) => {
        console.log("Log Out error: ", error);
      });
  };

  /**
   * Check Current User start
   */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current User: ", currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  //   console.log("User: ", user);

  /**
   * Check Current User end
   */

  /**
   * Successfully Toast Start
   */

  const successfullToast = (text) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  /**
   * Successfully Toast end
   */

  const authInfo = {
    baseUrl,
    user,
    loading,
    handleLogIn,
    handleLogOut,
    successfullToast,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
