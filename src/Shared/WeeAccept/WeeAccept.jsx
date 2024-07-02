import React from "react";

import payoneer from "../../assets/Accepted/payoneer.webp";
import paypal from "../../assets/Accepted/paypal.webp";
import strip from "../../assets/Accepted/stripe.webp";
import wise from "../../assets/Accepted/wise1.webp";

const WeeAccept = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-10">We Accept</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <img src={payoneer} alt="" />
        <img src={paypal} alt="" />
        <img src={payoneer} alt="" />
        <img src={paypal} alt="" />
      </div>
    </div>
  );
};

export default WeeAccept;
