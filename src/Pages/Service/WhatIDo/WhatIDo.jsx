import React, { useEffect, useState } from "react";
import ServiceBox from "./ServiceBox/ServiceBox";

const WhatIDo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);
  //Check Service

  return (
    <div>
      <h1 className="text-4xl text-white font-bold">What I do</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
        {services.map((servcie, idx) => (
          <ServiceBox key={idx} servcie={servcie}></ServiceBox>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
