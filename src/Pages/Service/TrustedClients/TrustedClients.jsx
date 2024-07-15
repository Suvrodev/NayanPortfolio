import React, { useEffect, useState } from "react";
import a from "../../../assets/trustedContact/1a.png";
import b from "../../../assets/trustedContact/2a.png";
import c from "../../../assets/trustedContact/3a.png";
import d from "../../../assets/trustedContact/4a.png";
import e from "../../../assets/trustedContact/5a.png";
import f from "../../../assets/trustedContact/6a.png";
import g from "../../../assets/trustedContact/7a.png";
import h from "../../../assets/trustedContact/8a.png";

const TrustedClients = () => {
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    fetch("/trusted.json")
      .then((res) => res.json())
      .then((data) => setImageArray(data));
  }, []);

  // console.log(imageArray);
  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-6">Trustade Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {imageArray.map((img, idx) => (
          <div
            key={idx}
            className="border p-10 flex items-center justify-center"
          >
            <img src={img.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedClients;
