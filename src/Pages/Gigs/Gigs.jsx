import React, { useEffect, useState } from "react";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import PortfolioContent from "../Portfolio/PorfolioContent/PortfolioContent";
import GigsBox from "./GigsBox/GigsBox";

const Gigs = () => {
  const [gigs, setGigs] = useState([]);
  useEffect(() => {
    fetch("./gigs.json")
      .then((res) => res.json())
      .then((data) => setGigs(data));
  }, []);
  // console.log(gigs);
  return (
    <div>
      <div className="m-16">
        <LinkBox text1={"Home"} text2={"Gigs"} />
      </div>

      <div className="m-16">
        <h1 className="text-4xl font-bold text-white">Gigs</h1>
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {gigs.map((gig, idx) => (
              <GigsBox key={idx} gig={gig}></GigsBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
