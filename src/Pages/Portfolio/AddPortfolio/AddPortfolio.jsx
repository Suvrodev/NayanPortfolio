import React, { useContext, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const portfolioContent = [
  "Web Design & Development",
  "Ui/UX",
  "Business Card",
  "Logo Design",
  "Flyer",
];

const AddPortfolio = () => {
  const { successfullToast, baseUrl } = useContext(AuthContext);

  //  For Image Show
  const [imageText, setImageText] = useState("");
  const handleTextChange = (event) => {
    setImageText(event.target.value);
    console.log(event.target.value);
  };

  // For Drop down
  const [selected, setSelected] = useState("Web Design & Development");
  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };
  // console.log("Category: ", selected);

  // For Add Portfolio
  const handleAddPortfolio = (e) => {
    e.preventDefault();
    const form = e.target;

    const category = selected;
    const image = form.image.value;

    let newPortfolio = { category, image };
    console.log("New Portfolio: ", newPortfolio);
    axios
      .post(`${baseUrl}/portfolios`, newPortfolio, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          successfullToast("Portfolio added Successfully");
        }
      });
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Add Portfolio</h1>
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

        <div className="flex justify-center mb-10">
          <img src={imageText} alt="" className="w-[450px] h-[320px]" />
        </div>

        <form onSubmit={handleAddPortfolio}>
          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10 text-white"
            placeholder="Image url"
            onChange={handleTextChange}
          />

          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Add Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPortfolio;
