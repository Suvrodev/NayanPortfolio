import React from "react";

const GigModal = ({ image, basic, standard, premium }) => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <img src={image} alt="" className="w-full" />
        <div className="grid grid-cols-3 px-5 py-2 w-10/12 mx-auto text-xl">
          <div>
            <span className="font-bold">Basic: </span> <span>$</span>{" "}
            <span>{basic}</span>
          </div>
          <div>
            <span className="font-bold">Standard: </span>
            <span>$</span> <span>{standard}</span>
          </div>
          <div>
            <span className="font-bold">Premium: </span> <span>$</span>{" "}
            <span>{premium}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigModal;
