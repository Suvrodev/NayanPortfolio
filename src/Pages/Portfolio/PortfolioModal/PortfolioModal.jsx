import React from "react";

const PortfolioModal = ({ image }) => {
  console.log("Modal Image: ", image);
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default PortfolioModal;
