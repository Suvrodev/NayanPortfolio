import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProject = () => {
  const { baseUrl, successfullToast } = useContext(AuthContext);
  const { id } = useParams();

  const [project, setProject] = useState("");
  useEffect(() => {
    axios.get(`${baseUrl}/projects/${id}`).then((res) => setProject(res.data));
  }, []);
  // console.log(project);

  const handleUpdateProject = (e) => {
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
      .patch(`${baseUrl}/projects/${id}`, newProject, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          successfullToast("Project updated Successfully");
        }
      });
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Update Project: {id}</h1>
      <div className="py-10">
        <div className="flex justify-center mb-10">
          <img src={project?.image} alt="" className="w-[450px] h-[320px]" />
        </div>
        <form onSubmit={handleUpdateProject}>
          <input
            type="text"
            name="title"
            id=""
            className="w-full bg-transparent border p-5 text-white"
            placeholder="Title"
            defaultValue={project?.title}
          />

          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Image url"
            defaultValue={project?.image}
          />

          <input
            type="url"
            name="link"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Order Link"
            defaultValue={project?.link}
          />
          <div className="flex gap-5">
            <input
              type="number"
              name="basic"
              id=""
              className="w-full bg-transparent border p-5 mt-10 text-white"
              placeholder="Basic Price"
              defaultValue={project?.basic}
            />
            <input
              type="number"
              name="standard"
              id=""
              className="w-full bg-transparent border p-5 mt-10 text-white"
              placeholder="Standard Price"
              defaultValue={project?.standard}
            />
            <input
              type="number"
              name="premium"
              id=""
              className="w-full bg-transparent border p-5 mt-10 text-white"
              placeholder="Premium Price"
              defaultValue={project?.premium}
            />
          </div>
          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
