import React from "react";
import TrustedClients from "./TrustedClients/TrustedClients";
import LinkBox from "../../Shared/LinkBox/LinkBox";

const Service = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Service"} />
      </div>
      <div className="pageMargin">
        <TrustedClients />
      </div>
    </div>
  );
};

export default Service;
