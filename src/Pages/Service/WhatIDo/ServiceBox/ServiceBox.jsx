import React, { useContext, useRef, useState } from "react";
import ServiceModal from "./ServiceModal/ServiceModal";
import { AuthContext } from "../../../../Provider/AuthProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceBox = ({ servcie, isAdmin, idx, getDep, setGetDep }) => {
  let number = idx + 1;
  const { baseUrl, successfullToast } = useContext(AuthContext);

  const modalRef = useRef(null);
  // console.log(servcie);
  const { _id, title, desc, popupDesc, image } = servcie;

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const [showReadMore, setShowReadMore] = useState(false);
  const readMoreShow = () => {
    setShowReadMore(true);
  };
  const readMoreHide = () => {
    setShowReadMore(false);
  };

  const handleDelete = (_id) => {
    console.log("Delete id: ", _id);
    axios.delete(`${baseUrl}/service/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        successfullToast("Deleted Successfully");
        setGetDep(!getDep);
      }
    });
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

      <div
        className="bg-[#222222] py-10 px-10 text-white h-[450px] relative"
        onMouseEnter={readMoreShow}
        onMouseLeave={readMoreHide}
      >
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex justify-between">
            <span className="bg-[#333333] w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-xl ">
              {number}
            </span>
            <span></span>
          </div>
          <h1 className="text-2xl font-bold mt-4">{title}</h1>
          <p className="c">{desc}</p>
        </div>
        <div className="py-4 absolute bottom-[20px]" onClick={showModal}>
          <div className="font-bold flex items-center gap-4">
            <p
              className={`${
                showReadMore ? "block" : "hidden"
              } overflow-hidden transition-all duration-700`}
            >
              {" "}
              Read More
            </p>{" "}
            <p className="w-[40px] h-[2px] bg-white"></p>{" "}
          </div>
        </div>

        {/* Update and Delete */}
        <div
          className={`${
            isAdmin ? "" : "hidden"
          } absolute  flex gap-2 bottom-0 right-0`}
        >
          <div className="bg-red-500 p-2 rounded-md flex justify-center text-white">
            <button onClick={() => handleDelete(_id)}>
              <DeleteIcon />
            </button>
          </div>
          <div className="bg-green-500 p-2 rounded-md flex justify-center text-white">
            <Link to={`updateproject/${_id}`}>
              {" "}
              <button>
                <BrowserUpdatedIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
