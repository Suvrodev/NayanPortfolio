import React, { useRef, useState } from "react";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import DeleteIcon from "@mui/icons-material/Delete";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";

const PortfolioBox = ({ portfolio, isAdmin }) => {
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
      <div className="relative">
        <div onClick={showModal}>
          <img
            src={image}
            alt=""
            className="w-[400px]"
            onClick={() => showImage(image)}
          />
        </div>
        <div
          className={`${
            isAdmin ? "" : "hidden"
          } absolute flex gap-4 right-0 bottom-0`}
        >
          <div className="bg-red-500 p-2 rounded-md flex justify-center text-white">
            <button onClick={() => handleDelete(_id)}>
              <DeleteIcon />
            </button>
          </div>
          <div className="bg-green-500 p-2 rounded-md flex justify-center text-white">
            <button>
              <BrowserUpdatedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;
