import React from "react";

const TimeLine = ({ education }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="flex items-center gap-4">
        <p className="w-[20px] h-[20px] rounded-full bg-green-400 relative right-[10px]"></p>
        <p className="bg-[#333333] py-2 px-4 rounded-2xl">{education?.year}</p>
      </div>
      <div>
        <p className="text-xl font-bold">{education?.institute}</p>
        <p>{education?.topic}</p>
      </div>
    </div>
  );
};

export default TimeLine;
