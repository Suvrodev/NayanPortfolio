import React, { useRef, useState } from "react";
import PortfolioModal from "../PortfolioModal/PortfolioModal";

const PortfolioBox = ({ portfolio }) => {
  const modalRef = useRef(null);
  const { image, category } = portfolio;

  const showImage = (image) => {
    console.log("Box Image:", image);
  };

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" ref={modalRef} className="modal w-full ">
        <div className="modal-box p-0 w-full max-w-5xl ">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white z-10">
              ✕
            </button>
          </form>
          <div className="p-0 w-full">
            <PortfolioModal image={image}></PortfolioModal>
          </div>
        </div>
      </dialog>

      {/* <div onClick={() => document.getElementById("my_modal_3").showModal()}> */}
      <div onClick={showModal}>
        <img
          src={image}
          alt=""
          className="w-[400px]"
          onClick={() => showImage(image)}
        />
      </div>

      {/* <div className=" modal w-full ">
        <div className="absolute bg-purple-600 h-[450px] modal-box p-0 w-full max-w-5xl">
          <h1>Modal</h1>
        </div>
      </div> */}
    </div>
  );
};

export default PortfolioBox;
