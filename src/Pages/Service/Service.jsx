import React from "react";
import TrustedClients from "./TrustedClients/TrustedClients";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import FunFact from "./FunFact/FunFact";
import PricingList from "./PricingList/PricingList";
import Consult from "./Consult/Consult";
import WhatIDo from "./WhatIDo/WhatIDo";
import pageTitle from "../../JS/pageTitle";

const Service = ({ isAdmin }) => {
  pageTitle("Service");
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Service"} />
      </div>
      <div className="pageMargin">
        <WhatIDo isAdmin={isAdmin} />
      </div>
      <div className="p-5 md:p-28 bg-[#222222]">
        <TrustedClients />
      </div>
      <div>
        <Consult />
      </div>
      <div className="p-5 md:p-28">
        <PricingList />
      </div>
      <div className="pageMargin">
        <FunFact />
      </div>
    </div>
  );
};

export default Service;
