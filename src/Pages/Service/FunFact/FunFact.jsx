import React, { useEffect, useState } from "react";
import FunFactBox from "./FunFactBox";

const FunFact = () => {
  const [funFacts, setFunfacts] = useState([]);
  useEffect(() => {
    fetch("./fucfact.json")
      .then((res) => res.json())
      .then((data) => setFunfacts(data));
  }, []);

  //   console.log(funFacts);
  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-10">Fun Fact</h1>
      <div className="grid grid-cols-3 gap-10">
        {funFacts.map((fun, idx) => (
          <FunFactBox key={idx} fun={fun} />
        ))}
      </div>
    </div>
  );
};

export default FunFact;

/**
 * https://www.npmjs.com/package/react-countup
 */
