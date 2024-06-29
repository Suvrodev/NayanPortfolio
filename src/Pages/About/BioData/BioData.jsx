import React, { useEffect, useState } from "react";

const BioData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./bioData.json")
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);

  const keys = Object.keys(data);
  console.log(keys);
  return (
    <div className="grid grid-cols-2">
      {keys.map((k, idx) => (
        <p className="text-white  w-[250px] " key={idx}>
          <span className="grid grid-cols-2">
            {" "}
            <span className="font-bold">{k}:</span> <span>{data[k]}</span>
          </span>
        </p>
      ))}
    </div>
  );
};

export default BioData;
