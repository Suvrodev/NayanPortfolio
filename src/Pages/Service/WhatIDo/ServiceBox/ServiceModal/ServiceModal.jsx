import React from "react";

const ServiceModal = ({ image, popupDesc }) => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <img src={image} alt="" className="w-full" />
        <div className="p-4 text-xl">
          <div>
            {/* <p>{popupDesc}</p> */}
            <div dangerouslySetInnerHTML={{ __html: popupDesc }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
