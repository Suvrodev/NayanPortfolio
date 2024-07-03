import React from "react";

const PortfolioBox = ({ portfolio }) => {
  //   console.log(portfolio);
  const { image, category } = portfolio;
  return (
    <div>
      <img src={image} alt="" className="w-[400px]" />
    </div>
  );
};

export default PortfolioBox;
