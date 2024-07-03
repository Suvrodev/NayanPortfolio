import React from "react";

const ServiceBox = ({ servcie }) => {
  //   console.log(servcie);
  const { id, title, desc } = servcie;
  return (
    <div className="bg-[#222222] py-10 px-10 text-white">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex justify-between">
          <span className="bg-[#333333] w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-xl ">
            {id}
          </span>
          <span></span>
        </div>
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceBox;
