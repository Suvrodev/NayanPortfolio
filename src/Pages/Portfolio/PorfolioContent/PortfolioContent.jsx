import React, { useContext, useEffect, useState } from "react";
import PortfolioBox from "../PortfolioBox/PortfolioBox";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";

const portfolioContent = [
  "All",
  "Web Design & Development",
  "Ui/UX",
  "Business Card",
  "Logo Design",
  "Flyer",
];
const PortfolioContent = ({ isAdmin }) => {
  const { baseUrl } = useContext(AuthContext);
  const [def, setDef] = useState(true);
  const [activeButton, setActiveButton] = useState("All");
  const handleButtonClick = (content) => {
    setActiveButton(content);
    setDef(!def);
  };

  const [portfolios, setPortfolios] = useState([]);
  const [showPortfolios, setShowPortfolios] = useState([]);
  const [getDep, setGetDep] = useState(true);
  useEffect(() => {
    axios.get(`${baseUrl}/portfolios`).then((res) => {
      setPortfolios(res.data);
    });
  }, [getDep]);

  //   let portFolios = [];
  useEffect(() => {
    console.log("Active Button========", activeButton);
    if (activeButton === "All") {
      setShowPortfolios(portfolios);
      return;
    }
    const portFolios = portfolios.filter(
      (port) => port.category == activeButton
    );
    setShowPortfolios(portFolios);
  }, [def, getDep]);

  // console.log("Portfolios: ", portfolios);
  //   console.log("New Portfolios: ", portFolios);

  // console.log("Active Button:", activeButton);
  return (
    <div>
      <div className="flex flex-wrap gap-2 md:gap-6">
        {portfolioContent.map((content, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(content)}
            className={`${
              activeButton === content ? "text-white" : "text-[#918f8a]"
            }`}
          >
            {content}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <div className="">
          {showPortfolios.length > 0 ? (
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 `}>
              {showPortfolios.map((portfolio, idx) => (
                <PortfolioBox
                  key={idx}
                  portfolio={portfolio}
                  isAdmin={isAdmin}
                  getDep={getDep}
                  setGetDep={setGetDep}
                ></PortfolioBox>
              ))}
            </div>
          ) : (
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 `}>
              {portfolios.map((portfolio, idx) => (
                <PortfolioBox
                  key={idx}
                  portfolio={portfolio}
                  isAdmin={isAdmin}
                  getDep={getDep}
                  setGetDep={setGetDep}
                ></PortfolioBox>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
