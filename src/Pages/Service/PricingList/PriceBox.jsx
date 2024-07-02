import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PricingText from "./PricingText";

const PriceBox = ({ p }) => {
  //   console.log(p);
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
    logoTransparency,
  } = p;

  let allItems = [];
  let item = {};
  if (conceptsIncluded) {
    item = {
      title: "Concepts included",
      text: conceptsIncluded,
    };
    allItems.push(item);
  }
  if (logoTransparency) {
    item = {
      title: "Logo Transparency",
      text: logoTransparency,
    };
    allItems.push(item);
  }

  if (sourceFile) {
    item = {
      title: "Source File",
      text: sourceFile,
    };
    allItems.push(item);
  }

  if (printableFile) {
    item = {
      title: "Printable file",
      text: printableFile,
    };
    allItems.push(item);
  }

  if (vectorFile) {
    item = {
      title: "Vector file",
      text: vectorFile,
    };
    allItems.push(item);
  }

  if (psdFile) {
    item = {
      title: "PSD file",
      text: psdFile,
    };
    allItems.push(item);
  }

  if (doubleSided) {
    item = {
      title: "Double-Sided file",
      text: doubleSided,
    };
    allItems.push(item);
  }

  if (threeDMockup) {
    item = {
      title: "3D mockup",
      text: threeDMockup,
    };
    allItems.push(item);
  }

  if (allFile) {
    item = {
      title: "AI file",
      text: allFile,
    };
    allItems.push(item);
  }

  if (socialMediaKit) {
    item = {
      title: "Social Media Kit",
      text: socialMediaKit,
    };
    allItems.push(item);
  }

  if (revisions) {
    item = {
      title: "Revisions",
      text: revisions,
    };
    allItems.push(item);
  }

  if (deliveryTime) {
    item = {
      title: "Delivery Time",
      text: deliveryTime,
    };
    allItems.push(item);
  }

  //   console.log("All Items: ", allItems);

  return (
    <div className="border p-5 text-white relative">
      <div>
        <h1 className="text-center text-2xl font-bold mt-16">{title}</h1>

        <div className="flex flex-col gap-4 font-bold mt-10">
          {allItems.map((all, idx) => (
            <PricingText key={idx} all={all}></PricingText>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="btn-lg text-black font-bold bg-white hover:bg-white">
            Order Now
          </button>
        </div>
      </div>

      <div className="border-4 w-[120px] h-[120px] rounded-full absolute -top-[40px] left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-black">
        <div className="flex">
          <p className="font-bold text-[18px]">$</p>
          <div className="text-4xl font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
