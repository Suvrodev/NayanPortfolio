import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const UpdatePortfolio = () => {
  const portfolioContent = [
    "Web Design & Development",
    "Ui/UX",
    "Business Card",
    "Logo Design",
    "Flyer",
  ];

  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    console.log(value);
  };

  const handleAddPortfolio = (e) => {
    e.preventDefault();
    console.log("Add Portfolio");
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Update Portfolio</h1>
      <div className="py-10">
        <div className="w-full">
          <h1 className="text-xl text-white">Select a service</h1>
          <div className="relative">
            <select
              value={selected}
              onChange={handleChange}
              className="dropdown dropdown-end p-2 mt-5"
            >
              <option value="" disabled>
                Select an option
              </option>
              {portfolioContent.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>

        <form onSubmit={handleAddPortfolio}>
          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10"
            placeholder="Image url"
          />

          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Update Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePortfolio;
