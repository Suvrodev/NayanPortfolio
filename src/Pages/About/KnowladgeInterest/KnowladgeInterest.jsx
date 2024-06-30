import React, { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const KnowladgeInterest = () => {
  const [knowladges, setKnowladges] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    fetch("./knowladgeInterests.json")
      .then((res) => res.json())
      .then((data) => {
        setInterests(data[0]?.interests);
        setKnowladges(data[0]?.knowladge);
      });
  }, []);

  //   console.log(knowladges);
  //   console.log(interests);

  return (
    <div>
      <div className="flex">
        <div className="w-6/12 ">
          <h1 className="text-xl text-white font-bold my-10">Knowledges</h1>
          {knowladges.map((knowladge, idx) => (
            <p key={idx} className="text-white text-[18px] mb-2">
              {" "}
              <ArrowRightIcon /> <span>{knowladge}</span>
            </p>
          ))}
        </div>

        <div className="w-6/12 ">
          {" "}
          <h1 className="text-xl text-white font-bold my-10">Ineterests</h1>
          {interests.map((knowladge, idx) => (
            <p key={idx} className="text-white  text-[18px] mb-2">
              {" "}
              <ArrowRightIcon /> <span>{knowladge}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowladgeInterest;
