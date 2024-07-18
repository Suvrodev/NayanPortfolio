import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateGigs = () => {
  const { baseUrl, successfullToast } = useContext(AuthContext);
  const { id } = useParams();

  const [gigs, setGigs] = useState("");
  useEffect(() => {
    axios.get(`${baseUrl}/gigs/${id}`).then((res) => setGigs(res.data));
  }, []);
  // console.log("Gigs: ", gigs);

  const handleUpdateGigs = (e) => {
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
      .patch(`${baseUrl}/gigs/${id}`, newProject, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          successfullToast("Gig updated Successfully");
        }
      });
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Update Gigs</h1>
      <div className="py-10">
        <div className="flex justify-center mb-10">
          <img src={gigs?.image} alt="" className="w-[450px] h-[320px]" />
        </div>

        <form onSubmit={handleUpdateGigs}>
          <input
            type="text"
            name="title"
            id=""
            className="w-full bg-transparent border p-5 text-white"
            placeholder="Title"
            defaultValue={gigs?.title}
          />

          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10  text-white"
            placeholder="Image url"
            defaultValue={gigs?.image}
          />

          <input
            type="url"
            name="link"
            id=""
            className="w-full bg-transparent border p-5 mt-10  text-white"
            placeholder="Order Link"
            defaultValue={gigs?.link}
          />
          <div className="flex gap-5">
            <input
              type="number"
              name="basic"
              id=""
              className="w-full bg-transparent border p-5 mt-10  text-white"
              placeholder="Basic Price"
              defaultValue={gigs?.basic}
            />
            <input
              type="number"
              name="standard"
              id=""
              className="w-full bg-transparent border p-5 mt-10  text-white"
              placeholder="Basic Price"
              defaultValue={gigs?.standard}
            />
            <input
              type="number"
              name="premium"
              id=""
              className="w-full bg-transparent border p-5 mt-10  text-white"
              placeholder="Premium Price"
              defaultValue={gigs?.premium}
            />
          </div>
          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Update Gigs
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGigs;
