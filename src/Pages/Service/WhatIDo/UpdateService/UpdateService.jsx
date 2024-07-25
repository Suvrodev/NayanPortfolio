import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";

import { AuthContext } from "../../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  const { baseUrl, successfullToast } = useContext(AuthContext);
  const { id } = useParams();

  const [service, setService] = useState("");
  useEffect(() => {
    axios.get(`${baseUrl}/service/${id}`).then((res) => setService(res.data));
  }, []);
  //   console.log("Service: ", service);

  const editor = useRef(null);
  const [content, setContent] = useState(service?.popupDesc);

  const handleUpdateService = (e) => {
    e.preventDefault();
    console.log("Update service");
    const form = e.target;

    const title = form.title.value;
    const image = form.image.value;
    const desc = form.desc.value;
    const popupDesc = content;

    let newService = {
      title,
      image,
      desc,
      popupDesc,
    };
    console.log("New Service: ", newService);

    axios
      .patch(`${baseUrl}/service/${id}`, newService, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          successfullToast("Service updated Successfully");
        }
      });
  };

  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Update Service</h1>

      <div className="py-10">
        <div className="flex justify-center mb-10">
          <img src={service?.image} alt="" className="w-[450px] h-[320px]" />
        </div>

        <form onSubmit={handleUpdateService}>
          <input
            type="text"
            name="title"
            id=""
            className="w-full bg-transparent border p-5 text-white"
            placeholder="Title"
            defaultValue={service?.title}
          />

          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Image url"
            defaultValue={service?.image}
          />

          <textarea
            name="desc"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Description"
            defaultValue={service?.desc}
          ></textarea>

          <div className="">
            <h1 className="my-5 font-bold">Popup Text</h1>
            <div className=" bg-green-400 overflow-hidden">
              <JoditEditor
                ref={editor}
                // value={content}
                value={service?.popupDesc}
                onChange={(newContent) => {
                  setContent(newContent);
                }}
                className="text-black p-2  resize-y"
              />
            </div>
            <div>{content}</div>
          </div>

          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Update Service
          </button>
        </form>
      </div>
      <div dangerouslySetInnerHTML={{ __html: service?.popupDesc }} />
    </div>
  );
};

export default UpdateService;
