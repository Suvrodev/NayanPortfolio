import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import EveryUser from "./EveryUser";

const AdminLogedUser = () => {
  const { baseUrl } = useContext(AuthContext);

  const [userDep, setUserDep] = useState(true);
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/user`).then((res) => setAllUser(res.data));
  }, [userDep]);

  //   console.log("All User: ", allUser);
  return (
    <div>
      <h1 className="text-2xl font-bold">All User</h1>
      <div className="mt-10">
        {allUser.map((user, idx) => (
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

export default AdminLogedUser;
