import React from "react";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import PortfolioContent from "./PorfolioContent/PortfolioContent";
import pageTitle from "../../JS/pageTitle";

const Portfolio = () => {
  pageTitle("Portfolio");
  return (
    <div>
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Creative portfolio"} />
      </div>

      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Creative Portfolio</h1>
        <div className="my-20">
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
