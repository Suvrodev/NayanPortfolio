import React from "react";
import a from "../../../assets/trustedContact/1a.png";
import b from "../../../assets/trustedContact/2a.png";
import c from "../../../assets/trustedContact/3a.png";
import d from "../../../assets/trustedContact/4a.png";
import e from "../../../assets/trustedContact/5a.png";
import f from "../../../assets/trustedContact/6a.png";
import g from "../../../assets/trustedContact/7a.png";
import h from "../../../assets/trustedContact/8a.png";

const TrustedClients = () => {
  const imageArray = [a, b, c, d, e, f, g, h];
  console.log(imageArray);
  return (
    <div>
      <h1>Trustade Contact</h1>
      <div className="grid grid-cols-4">
        {imageArray.map((img, idx) => (
          <div
            key={idx}
            className="border p-10 flex items-center justify-center"
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedClients;
