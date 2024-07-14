import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location)

  //   const [confirmMail, setConfirmMail] = useState(false);
  //   useEffect(() => {
  //     const mail = user?.email;
  //     console.log("Mail: ", mail);
  //     if (mail == "suvrodevhowlader@gmail.com") {
  //       setConfirmMail(true);
  //     }
  //   }, [user, confirmMail]);
  //   console.log("Confirm Mail: ", confirmMail);

  if (loading) {
    return (
      <progress className="progress w-56 bg-green-400 text-green-400"></progress>
    );
  }
  if (user && user?.email == "suvrodevhowlader1408@gmail.com") {
    return children;
  }

  return <Navigate to="/admin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
