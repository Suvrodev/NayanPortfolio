import React, { useEffect, useState } from "react";
import HomeServiceBox from "./HomeServiceBox/HomeServiceBox";

const HomeService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/homeService.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-20 ">
        {services.map((service, idx) => (
          <HomeServiceBox key={idx} service={service}></HomeServiceBox>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
