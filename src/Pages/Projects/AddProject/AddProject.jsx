import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddProject = () => {
  const { baseUrl, successfullToast } = useContext(AuthContext);
  const handleAddProject = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const image = form.image.value;
    const link = form.link.value;
    const basic = form.basic.value;
    const standard = form.standard.value;
    const premium = form.premium.value;

    let newProject = {
      title,
      image,
      link,
      basic: parseFloat(basic),
      standard: parseFloat(standard),
      premium: parseFloat(premium),
    };
    console.log("New Project: ", newProject);
    axios
      .post(`${baseUrl}/projects`, newProject, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          successfullToast("Data added Successfully");
        }
      });
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Add Project</h1>
      <div className="py-10">
        <form onSubmit={handleAddProject}>
          <input
            type="text"
            name="title"
            id=""
            className="w-full bg-transparent border p-5"
            placeholder="Title"
          />

          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10"
            placeholder="Image url"
          />

          <input
            type="url"
            name="link"
            id=""
            className="w-full bg-transparent border p-5 mt-10"
            placeholder="Order Link"
          />
          <div className="flex gap-5">
            <input
              type="number"
              name="basic"
              id=""
              className="w-full bg-transparent border p-5 mt-10"
              placeholder="Basic Price"
            />
            <input
              type="number"
              name="standard"
              id=""
              className="w-full bg-transparent border p-5 mt-10"
              placeholder="Basic Price"
            />
            <input
              type="number"
              name="premium"
              id=""
              className="w-full bg-transparent border p-5 mt-10"
              placeholder="Basic Price"
            />
          </div>
          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;