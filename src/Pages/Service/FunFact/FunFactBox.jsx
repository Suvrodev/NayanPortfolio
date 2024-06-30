import React from "react";
import CountUp from "react-countup";

const FunFactBox = ({ fun }) => {
  //   console.log(fun);

  const { number, title, after } = fun;
  return (
    <div className="flex  items-center justify-center border-[1px] text-white gap-4 p-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-1 text-2xl font-bold">
          <h1>
            <CountUp end={100} />
          </h1>
          <p>{after}</p>
        </div>
        <div className="text-[18px]">{title}</div>
      </div>
    </div>
  );
};

export default FunFactBox;
