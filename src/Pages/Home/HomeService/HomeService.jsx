import React, { useContext, useEffect, useState } from "react";
import HomeServiceBox from "./HomeServiceBox/HomeServiceBox";
import HomeServiceDesign from "./HomeServiceDesign/HomeServiceDesign";
import { AuthContext } from "../../../Provider/AuthProvider";

const HomeService = () => {
  const { baseUrl } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("/homeService.json")
    fetch(`${baseUrl}/homeservice`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {/* <div className="flex flex-col items-center justify-center gap-20 ">
        {services.map((service, idx) => (
          <HomeServiceBox
            key={idx}
            idx={idx}
            service={service}
          ></HomeServiceBox>
        ))}
      </div> */}
      <div className="flex flex-col  justify-center  ">
        {services.map((service, idx) => (
          <HomeServiceDesign
            key={idx}
            idx={idx}
            service={service}
          ></HomeServiceDesign>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
