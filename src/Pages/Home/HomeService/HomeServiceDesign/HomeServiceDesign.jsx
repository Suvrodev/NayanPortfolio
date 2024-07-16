import React from "react";
import "./HomeServiceDesign.css";

const HomeServiceDesign = ({ service, idx }) => {
  // console.log(service);
  let cId = idx + 1;
  const { id, image, title, text } = service;

  return (
    <div className="relative">
      <div className={`flex gap-10 ${cId % 2 == 0 ? "" : "flex-row-reverse"} `}>
        {/* <div className="grid grid-cols-[48%_auto_48%] gap-10 items-center "> */}
        <div className={`perSide   relative`}>
          <h1 className="perTitle ">{title}</h1>
          <p className="text-justify">{text}</p>
          <div className="z-10">
            <p
              className={`absolute  ${
                cId % 2 == 0
                  ? "-right-[28px] top-[50%] transform -translate-y-[50%]"
                  : "-left-[27px] top-[50%] transform -translate-y-[50%]"
              } w-[15px] h-[15px] rounded-full bg-white border-4 border-green-400 hidden lg:block`}
            ></p>
          </div>
        </div>
        <div className={`w-[50%] hidden md:block  `}></div>
      </div>
      <div className="hidden md:block w-[2px]  bg-green-400 absolute top-0 h-full  left-1/2  transform -translate-x-1/2"></div>
    </div>
  );
};

export default HomeServiceDesign;
