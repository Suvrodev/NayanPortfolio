import React from "react";

const PortfolioBox = ({ portfolio }) => {
  //   console.log(portfolio);
  const { image, category } = portfolio;
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box p-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white z-10">
              ✕
            </button>
          </form>
          <div className="p-0">
            <img src={image} alt="" />
          </div>
        </div>
      </dialog>

      <div onClick={() => document.getElementById("my_modal_3").showModal()}>
        <img src={image} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};

export default PortfolioBox;
