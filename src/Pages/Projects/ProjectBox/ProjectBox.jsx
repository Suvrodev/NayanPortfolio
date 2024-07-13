import React, { useRef } from "react";
import goLink from "../../../JS/goLink";
import GigModal from "../../Gigs/GigModal/GigModal";

const ProjectBox = ({ project }) => {
  const modalRef = useRef(null);
  const { id, image, basic, standard, premium, title, link } = project;

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
            <GigModal
              image={image}
              basic={basic}
              standard={standard}
              premium={premium}
            ></GigModal>
          </div>
        </div>
      </dialog>

      <div className="border p-2 rounded-md">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={image}
            alt=""
            className="w-[450px] h-[250px] rounded-md"
            onClick={showModal}
          />
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <button className="btn  text-white" onClick={() => goLink(link)}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
