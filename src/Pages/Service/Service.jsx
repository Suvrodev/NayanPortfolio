import React from "react";
import TrustedClients from "./TrustedClients/TrustedClients";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import FunFact from "./FunFact/FunFact";

const Service = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Service"} />
      </div>
      <div className="p-28 bg-[#222222]">
        <TrustedClients />
      </div>
      <div className="pageMargin">
        <FunFact />
      </div>
    </div>
  );
};

export default Service;
