import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import EveryUser from "../AdminLogedUser/EveryUser";

const AdminAdmin = () => {
  const { baseUrl } = useContext(AuthContext);

  const [userDep, setUserDep] = useState(true);
  const [allAdmin, setAllAdmin] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/user/admin`).then((res) => setAllAdmin(res.data));
  }, [userDep]);

  //   console.log("All User: ", allUser);
  return (
    <div>
      <h1 className="text-2xl font-bold">All User</h1>
      <div className="mt-10">
        {allAdmin.map((user, idx) => (
          <EveryUser
            key={idx}
            user={user}
            userDep={userDep}
            setUserDep={setUserDep}
          ></EveryUser>
        ))}
      </div>
    </div>
  );
};

export default AdminAdmin;
