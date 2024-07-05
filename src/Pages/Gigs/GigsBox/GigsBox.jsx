import React from "react";
import goLink from "../../../JS/goLink";

const GigsBox = ({ gig }) => {
  console.log(gig);
  const { id, image, basic, standard, premium, title, link } = gig;
  return (
    <div className="border p-2 rounded-md">
      <div className="flex flex-col items-center justify-center gap-5">
        <img src={image} alt="" className="w-[450px] h-[250px] rounded-md" />
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <button
          className="btn bg-[#FF8080] hover:bg-[#FF8080] text-black"
          onClick={() => goLink(link)}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default GigsBox;
