import React, { useRef } from "react";
import ServiceModal from "./ServiceModal/ServiceModal";

const ServiceBox = ({ servcie }) => {
  const modalRef = useRef(null);
  console.log(servcie);
  const { id, title, desc, popupDesc, image } = servcie;

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
            <ServiceModal image={image} popupDesc={popupDesc} />
          </div>
        </div>
      </dialog>

      <div className="bg-[#222222] py-10 px-10 text-white" onClick={showModal}>
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
    </div>
  );
};

export default ServiceBox;
