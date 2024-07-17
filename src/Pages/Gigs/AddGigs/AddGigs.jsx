import React from "react";

const AddGigs = () => {
  const handleAddGigs = (e) => {
    e.preventDefault();
    console.log("Add Gigs");
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Add Gigs</h1>
      <div className="py-10">
        <form onSubmit={handleAddGigs}>
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
              name="basic"
              id=""
              className="w-full bg-transparent border p-5 mt-10"
              placeholder="Basic Price"
            />
          </div>
          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Add Gigs
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGigs;
