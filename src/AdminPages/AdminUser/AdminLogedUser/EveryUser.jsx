import React, { useContext, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
const rollList = ["admin", "user"];
const EveryUser = ({ user, userDep, setUserDep }) => {
  const { baseUrl, successfullToast } = useContext(AuthContext);

  const { email, name, phone, photo, role, _id } = user;

  const handleDeleteUser = (id) => {
    axios.delete(`${baseUrl}/user/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        successfullToast("Deleted Successfully");
        setUserDep(!userDep);
      }
    });
  };

  const [selected, setSelected] = useState(role);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };
  const handleUserUpdate = (id) => {
    const updateUser = {
      name,
      photo,
      email,
      phone,
      role: selected,
    };
    console.log("Update User: ", updateUser);

    axios
      .patch(`${baseUrl}/user/${id}`, updateUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          successfullToast("Gig updated Successfully");
          setUserDep(!userDep);
        }
      });
  };

  return (
    <div className="text-white">
      <div className="grid grid-cols-3">
        <div>
          <h1 className=" font-bold">{_id}</h1>
          <h1 className="">Name:{name}</h1>
          <h1> Email: {email} </h1>
          <h1> Phone: {phone} </h1>
          <h1 className="text-xl font-bold"> Role: {role} </h1>
        </div>
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="flex gap-10 items-center">
            <div className="relative">
              <select
                value={selected}
                onChange={handleChange}
                className="dropdown dropdown-end p-2 mt-5"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {rollList.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              className="btn btn-primary"
              onClick={() => handleUserUpdate(_id)}
            >
              Update
            </button>
            <button
              className="btn bg-red-500 text-white"
              onClick={() => handleDeleteUser(_id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-10">
        <hr />
      </div>
    </div>
  );
};

export default EveryUser;
