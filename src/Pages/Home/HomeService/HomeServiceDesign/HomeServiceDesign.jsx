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
          <h1 className="perTitle  ">{title}</h1>
          <p className="text-justify leading-[30px] c">{text}</p>
          <div className="z-10">
            <p
              className={`absolute  ${
                cId % 2 == 0
                  ? "-right-[30px] top-[50%] transform -translate-y-[50%]"
                  : "-left-[30px] top-[50%] transform -translate-y-[50%]"
              } w-[20px] h-[20px] rounded-full bg-white border-4 hidden lg:block`}
            ></p>
          </div>
        </div>
        <div className={`w-[50%] hidden md:block  `}></div>
      </div>
      <div className="hidden md:block w-[2px]  bg-white absolute top-0 h-full  left-1/2  transform -translate-x-1/2"></div>
    </div>
  );
};

export default HomeServiceDesign;
