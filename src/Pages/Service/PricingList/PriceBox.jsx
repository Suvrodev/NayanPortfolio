import React from "react";

const PriceBox = ({ p }) => {
  console.log(p);
  const {
    id,
    price,
    title,
    conceptsIncluded,
    sourceFile,
    printableFile,
    vectorFile,
    psdFile,
    doubleSided,
    threeDMockup,
    allFile,
    socialMediaKit,
    revisions,
    deliveryTime,
  } = p;
  return (
    <div className="border p-5 text-white">
      <div>
        <h1 className="text-center text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default PriceBox;
