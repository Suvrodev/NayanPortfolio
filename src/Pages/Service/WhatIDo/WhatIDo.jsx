import React, { useContext, useEffect, useState } from "react";
import ServiceBox from "./ServiceBox/ServiceBox";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const WhatIDo = ({ isAdmin }) => {
  const { baseUrl } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [getDep, setGetDep] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/service`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [getDep]);

  // console.log(services);
  //Check Service

  return (
    <div>
      <h1 className="text-4xl text-white font-bold">What I do</h1>
      <div className={`${isAdmin ? "" : "hidden"} mt-10`}>
        <Link to={`/dashboard/service/addservice`}>
          {" "}
          <button className="btn btn-primary text-white">Add Service</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
        {services.map((servcie, idx) => (
          <ServiceBox
            key={idx}
            servcie={servcie}
            isAdmin={isAdmin}
            idx={idx}
            getDep={getDep}
            setGetDep={setGetDep}
          ></ServiceBox>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
