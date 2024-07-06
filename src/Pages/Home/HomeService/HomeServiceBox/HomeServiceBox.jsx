import React from "react";

const HomeServiceBox = ({ service }) => {
  console.log(service);
  const { id, image, title, text } = service;
  return (
    <div className="text-white ">
      <div className={`flex gap-20 ${id % 2 == 0 ? "flex-row-reverse" : ""}`}>
        <div className="w-[50%] flex items-center justify-center">
          <div>
            <h1 className="text-2xl  mb-10">{title}</h1>
            <p>{text}</p>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src={image}
            alt=""
            className="w-[450px] h-[280px] shadow-md shadow-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeServiceBox;
