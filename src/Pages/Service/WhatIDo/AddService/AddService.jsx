import React, { useContext, useMemo, useRef, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser/lib/index";

const AddService = () => {
  const { successfullToast, baseUrl } = useContext(AuthContext);

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleAddGigs = (e) => {
    e.preventDefault();
    console.log("Add service");
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
      .post(`${baseUrl}/service`, newService, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          successfullToast("Service added Successfully");
        }
      });
  };

  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Add Service</h1>
      <div className="py-10">
        <form onSubmit={handleAddGigs}>
          <input
            type="text"
            name="title"
            id=""
            className="w-full bg-transparent border p-5 text-white"
            placeholder="Title"
          />

          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Image url"
          />

          <textarea
            name="desc"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Description"
          ></textarea>

          <div className="">
            <h1 className="my-5 font-bold">Popup Text</h1>
            <div className=" bg-green-400 overflow-hidden">
              <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => {
                  setContent(newContent);
                }}
                className="text-black p-2  resize-y"
              />
            </div>
            <div>{content}</div>
          </div>

          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Add Service
          </button>
        </form>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AddService;
