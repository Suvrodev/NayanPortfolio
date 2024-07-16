import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PricingText = ({ all }) => {
  //   console.log(all);
  const { title, text } = all;
  return (
    <div className="c">
      <span>
        <ArrowRightAltIcon />
      </span>
      <span>{title}</span> :<span>{text}</span>
    </div>
  );
};

export default PricingText;
