import React, { useEffect, useState } from "react";

const BioData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./bioData.json")
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);

  const keys = Object.keys(data);
  // console.log(keys);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full text-white gap-x-80">
      {keys.map((k, idx) => (
        <p className="text-white  " key={idx}>
          <span className=" w-[1000px] grid grid-cols-2  ">
            {" "}
            <span className="font-bold">{k}:</span>{" "}
            <span className=" relative right-[400px] ">{data[k]}</span>
          </span>
        </p>
      ))}
      {/* <div className="grid grid-cols-2">
        <h1 className="font-bold">Birthday:</h1>
        <p>05 sep, 2000</p>
      </div> */}
    </div>
  );
};

export default BioData;
