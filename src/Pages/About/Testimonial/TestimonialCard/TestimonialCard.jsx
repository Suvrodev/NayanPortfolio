import React from "react";
import Image from "../../../../assets/bgImage/Bg-4.jpg";
// import { StarRatingInput } from "react-star-rating-input";
// import insertCss from "insert-css";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TestimonialCard = () => {
  return (
    <div className="flex w-[70%] mx-auto">
      {/* Left Div */}
      <div className="w-[20%] flex justify-between ">
        <div className="flex items-center justify-center">
          <img src={Image} alt="" className="w-[150px] h-[150px]" />
        </div>
        <div className="h-full relative flex items-center">
          <div className="absolute w-[25px] h-[1px] bg-black top-[50%] right-0"></div>
          <div className="w-[1px] h-[150px] bg-black"></div>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-[80%]  flex flex-col gap-5 px-5">
        <div className="text-center text-[18px] text-white">
          Very fast response and clear communication.. Made the changes
          requested instantly.. couldn’t recommend it more
        </div>
        <div className="flex justify-between">
          <div>
            <Rating style={{ maxWidth: 120 }} value={5} />
          </div>
          <div></div>
        </div>
        <div className="flex flex-col items-center justify-center text-[20px]">
          <h1 className=" font-bold text-white">Andre da Silva</h1>
          <p className="text-[#C72289]">Director</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
