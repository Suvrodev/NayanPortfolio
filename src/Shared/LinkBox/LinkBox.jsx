import React from "react";

const LinkBox = ({ text1, text2, text3 }) => {
  return (
    <div className="">
      <span className="bg-[#222222] p-3 text-white ">
        {text1}
        {text2}
        {text3}
      </span>
    </div>
  );
};

export default LinkBox;
