import React from "react";
import CountUp from "react-countup";

const FunFactBox = ({ fun }) => {
  console.log(fun);

  const { number, title, after, botText } = fun;
  return (
    <div className="flex  items-center justify-center border-[1px] text-white gap-4 p-10">
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-bold text-center">{title}</div>
        <div className="flex items-center justify-center gap-1 text-2xl font-bold">
          <h1 className="text-[60px] font-bold">
            <CountUp end={number} />
          </h1>
        </div>
        <div className="text-2xl font-bold text-center">{botText}</div>
      </div>
    </div>
  );
};

export default FunFactBox;
